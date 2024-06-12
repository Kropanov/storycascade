import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { CountriesModule } from '../countries/countries.module';

@Module({
  controllers: [NovelsController],
  providers: [NovelsService],
  imports: [CountriesModule],
})
export class NovelsModule {}
