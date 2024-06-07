import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class GenresService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  create(createGenreDto: CreateGenreDto) {
    return 'This action adds a new genre';
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM genres', []);
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
