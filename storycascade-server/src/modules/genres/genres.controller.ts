import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateGenreDTO } from './dto/create-genre.dto';
import { UpdateGenreDTO } from './dto/update-genre.dto';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  async create(@Body() body: CreateGenreDTO) {
    return this.genresService.create(body);
  }

  @Get()
  async findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.genresService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateGenreDTO) {
    return this.genresService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.genresService.remove(+id);
  }
}
