import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { PostgresService } from '../database/database.service';

@Injectable()
export class NovelsService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createNovelDto: CreateNovelDto) {
    const { id, title, image, description, rating, genre } = createNovelDto;
    const res = await this.postgres.query(
      'INSERT INTO novel (id, title, image, description, rating, genre) VALUES ($1, $2, $3, $4, $5, $6)',
      [id, title, image, description, rating, genre],
    );
    return res.rows;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT * FROM novel', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM novel WHERE id = $1', [id]);
    return res.rows[0];
  }

  async update(_id: number, updateNovelDto: UpdateNovelDto) {
    const { id, title, image, description, rating, genre } = updateNovelDto;
    return await this.postgres.query(
      'UPDATE novel SET id = $1, title = $2, image = $3, description = $4, rating = $5, genre = $6 WHERE id = $7',
      [id, title, image, description, rating, genre, _id],
    );
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM novel WHERE id = $1', [id]);
    return res.rows;
  }
}
