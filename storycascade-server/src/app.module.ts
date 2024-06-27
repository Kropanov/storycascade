import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NovelsModule } from './novels/novels.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { CommentsModule } from './comments/comments.module';
import { S3Module } from './common/s3/s3.module';
import { CountriesModule } from './countries/countries.module';
import { GenresModule } from './genres/genres.module';
import { TagsModule } from './tags/tags.module';
import { StatesModule } from './states/states.module';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './common/fs/fs.module';

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
