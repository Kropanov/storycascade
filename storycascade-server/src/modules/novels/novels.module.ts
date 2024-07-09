import { Module } from '@nestjs/common';

import { CountriesModule } from '../countries/countries.module';
import { GenresModule } from '../genres/genres.module';
import { StatesModule } from '../states/states.module';
import { TagsModule } from '../tags/tags.module';
import { NovelsController } from './novels.controller';
import { NovelsService } from './novels.service';

@Module({
  controllers: [NovelsController],
  providers: [NovelsService],
  imports: [CountriesModule, StatesModule, GenresModule, TagsModule],
})
export class NovelsModule {}
