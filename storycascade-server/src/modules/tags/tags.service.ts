import { Injectable } from '@nestjs/common';

import { PostgresService } from '../common/database/database.service';
import { CreateTagDTO } from './dto/create-tag.dto';
import { UpdateTagDTO } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(body: CreateTagDTO) {
    return this.postgres.query('INSERT INTO tags (name) VALUES ($1)', [body.name]);
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM tags', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT name FROM tags WHERE id = $1', [id]);
    return res.rows[0];
  }

  async update(id: number, body: UpdateTagDTO) {
    return await this.postgres.query('UPDATE tags SET name = $1 WHERE id = $2', [body.name, id]);
  }

  async remove(id: number) {
    return await this.postgres.query('DELETE FROM tags WHERE id = $1', [id]);
  }

  async getIdByName(name: string) {
    const res = await this.postgres.query('SELECT id FROM tags WHERE name = $1', [name]);
    return res.rows[0]?.id;
  }

  async linkTagToNovel(novel_id: number, tag_id: number) {
    const res = await this.postgres.query('INSERT INTO novel_tags (novel_id, tag_id) VALUES ($1, $2)', [
      novel_id,
      tag_id,
    ]);
    return res.rows;
  }
}
