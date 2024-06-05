import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  @Post()
  async create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelsService.create(createNovelDto);
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
  async update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelsService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.novelsService.remove(+id);
  }
}
