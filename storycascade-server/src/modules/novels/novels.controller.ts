import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDTO } from './dto/create-novel.dto';
import { UpdateNovelDTO } from './dto/update-novel.dto';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  @Post()
  async create(@Body() body: CreateNovelDTO) {
    return this.novelsService.create(body);
  }

  @Get()
  async findAll() {
    return this.novelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.novelsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateNovelDTO) {
    return this.novelsService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.novelsService.remove(+id);
  }
}
