import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class TagsService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createTagDto: CreateTagDto) {
    return `This action returns a # tag`;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM tags', []);
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
