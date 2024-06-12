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

  async create(createGenreDto: CreateGenreDto) {
    const { name } = createGenreDto;
    const res = await this.postgres.query('INSERT INTO genres (name) VALUES ($1)', [name]);
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

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const { name } = updateGenreDto;
    const res = await this.postgres.query('UPDATE genres SET name = $1 WHERE id = $2', [name, id]);
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
}
