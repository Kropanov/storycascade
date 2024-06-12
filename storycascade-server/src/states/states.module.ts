import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';

@Module({
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
