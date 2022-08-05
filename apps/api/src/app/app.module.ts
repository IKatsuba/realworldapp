import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { LoadStrategy, MikroORM } from '@mikro-orm/core';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { Article, ArticleModule, Comment } from '@app/api/http/article';
import { ProfileModule } from '@app/api/http/profile';
import { Tag, TagModule } from '@app/api/http/tag';
import { User, UserModule } from '@app/api/http/user';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Migration20211219155639 } from '@app/api/migrations';

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
