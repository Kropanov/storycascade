import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NovelsModule } from './novels/novels.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    NovelsModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
