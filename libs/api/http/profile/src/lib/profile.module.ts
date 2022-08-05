import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthMiddleware, User, UserModule } from '@app/api/http/user';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  exports: [],
  imports: [MikroOrmModule.forFeature({ entities: [User] }), UserModule],
  providers: [ProfileService],
})
export class ProfileModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: 'profiles/:username/follow',
      method: RequestMethod.ALL,
    });
  }
}
