import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import PostgresService from '../database';

@Injectable()
export class NovelsService {
  create(createNovelDto: CreateNovelDto) {
    return 'This action adds a new novel';
  }

  async findAll() {
    const postgres = new PostgresService();
    const res = await postgres.query('SELECT * FROM novel', []);
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} novel`;
  }

  update(id: number, updateNovelDto: UpdateNovelDto) {
    return `This action updates a #${id} novel`;
  }

  remove(id: number) {
    return `This action removes a #${id} novel`;
  }
}
