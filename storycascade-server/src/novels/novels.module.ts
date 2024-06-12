import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { CountriesModule } from '../countries/countries.module';
import { StatesModule } from '../states/states.module';
import { GenresModule } from '../genres/genres.module';
import { TagsModule } from '../tags/tags.module';

@Module({
  controllers: [NovelsController],
  providers: [NovelsService],
  imports: [CountriesModule, StatesModule, GenresModule, TagsModule],
})
export class NovelsModule {}
