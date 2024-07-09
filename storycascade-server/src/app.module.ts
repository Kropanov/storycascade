import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

import { AuthModule } from './modules/auth/auth.module';
import { CommentsModule } from './modules/comments/comments.module';
import { DatabaseModule } from './modules/common/database/database.module';
import { FileModule } from './modules/common/fs/fs.module';
import { S3Module } from './modules/common/s3/s3.module';
import { CountriesModule } from './modules/countries/countries.module';
import { GenresModule } from './modules/genres/genres.module';
import { NovelsModule } from './modules/novels/novels.module';
import { StatesModule } from './modules/states/states.module';
import { TagsModule } from './modules/tags/tags.module';
import { UploadModule } from './modules/upload/upload.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MulterModule.register({ dest: './files' }),
    NovelsModule,
    UsersModule,
    AuthModule,
    CommentsModule,
    DatabaseModule,
    S3Module,
    FileModule,
    CountriesModule,
    GenresModule,
    TagsModule,
    StatesModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
