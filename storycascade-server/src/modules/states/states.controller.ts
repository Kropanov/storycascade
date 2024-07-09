import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateStateDTO } from './dto/create-state.dto';
import { UpdateStateDTO } from './dto/update-state.dto';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Post()
  async create(@Body() body: CreateStateDTO) {
    return this.statesService.create(body);
  }

  @Get()
  async findAll() {
    return this.statesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.statesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateStateDTO) {
    return this.statesService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.statesService.remove(+id);
  }
}
