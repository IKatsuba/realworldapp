import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { LoadStrategy, MikroORM } from '@mikro-orm/core';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { User } from './user/user.entity';
import { Tag } from './tag/tag.entity';
import { Comment } from './article/comment.entity';
import { Article } from './article/article.entity';
import { Migration20211219155639 } from './migrations/Migration20211219155639';

@Module({
  controllers: [AppController],
  imports: [
    MikroOrmModule.forRoot({
      type: 'mysql' as const,
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      dbName: 'realworld',
      entities: [User, Tag, Comment, Article],
      debug: true,
      loadStrategy: LoadStrategy.JOINED,
      highlighter: new SqlHighlighter(),
      registerRequestContext: false,
      migrations: {
        migrationsList: [
          {
            name: 'Migration20211219155639.ts',
            class: Migration20211219155639,
          },
        ],
      },
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
  ],
  providers: [],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  // for some reason the auth middlewares in profile and article modules are fired before the request context one,
  // so they would fail to access contextual EM. by registering the middleware directly in AppModule, we can get
  // around this issue
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
