import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NovelsModule } from './novels/novels.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { CommentsModule } from './comments/comments.module';
import { S3Module } from './common/s3/s3.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    NovelsModule,
    UsersModule,
    AuthModule,
    CommentsModule,
    DatabaseModule,
    S3Module,
    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
