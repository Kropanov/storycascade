import { Injectable } from '@nestjs/common';

import { PostgresService } from '../common/database/database.service';
import { CreateGenreDTO } from './dto/create-genre.dto';
import { UpdateGenreDTO } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(body: CreateGenreDTO) {
    const res = await this.postgres.query('INSERT INTO genres (name) VALUES ($1)', [body.name]);
    return res.rows;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM genres', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT name FROM genres WHERE id = $1', [id]);
    return res.rows;
  }

  async update(id: number, body: UpdateGenreDTO) {
    const res = await this.postgres.query('UPDATE genres SET name = $1 WHERE id = $2', [body.name, id]);
    return res.rows;
  }

  async remove(id: number) {
    return await this.postgres.query('DELETE FROM genres WHERE id = $1', [id]);
  }

  async getIdByName(name: string) {
    const res = await this.postgres.query('SELECT id FROM genres WHERE name = $1', [name]);
    return res.rows[0]?.id;
  }

  async linkGenreToNovel(novel_id: number, genre_id: number) {
    const res = await this.postgres.query('INSERT INTO novel_genre (novel_id, genre_id) VALUES ($1, $2)', [
      novel_id,
      genre_id,
    ]);
    return res.rows;
  }

  async getGenresByNovelId(novel_id: number) {
    const res = await this.postgres.query(
      'SELECT genres.name FROM novel_genre INNER JOIN genres ON novel_genre.genre_id = genres.id WHERE novel_id = $1',
      [novel_id],
    );
    return res.rows;
  }
}
