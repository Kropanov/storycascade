import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NovelsModule } from './novels/novels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    NovelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
