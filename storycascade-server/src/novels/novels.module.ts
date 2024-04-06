import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';

@Module({
  controllers: [NovelsController],
  providers: [NovelsService],
})
export class NovelsModule {}
