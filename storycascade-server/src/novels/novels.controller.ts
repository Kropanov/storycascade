import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelsService.create(createNovelDto);
  }

  @Get()
  findAll() {
    return this.novelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelsService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelsService.remove(+id);
  }
}
