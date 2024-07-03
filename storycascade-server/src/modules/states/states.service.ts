import { Injectable } from '@nestjs/common';

import { PostgresService } from '../common/database/database.service';
import { CreateStateDTO } from './dto/create-state.dto';
import { UpdateStateDTO } from './dto/update-state.dto';

@Injectable()
export class StatesService {
  private readonly postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(body: CreateStateDTO) {
    const res = await this.postgres.query('INSERT INTO states (name, description) VALUES ($1, $2)', [
      body.name,
      body.description,
    ]);
    return res.rows;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name, description FROM states', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT name, description FROM states WHERE id = $1', [id]);
    return res.rows[0];
  }

  async update(id: number, body: UpdateStateDTO) {
    const res = await this.postgres.query('UPDATE states SET name = $1, description = $2 WHERE id = $3', [
      body.name,
      body.description,
      id,
    ]);
    return res.rows;
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM states WHERE id = $1', [id]);
    return res.rows;
  }

  async getIdByName(name: string) {
    const res = await this.postgres.query('SELECT id FROM states WHERE name = $1', [name]);
    return res.rows[0]?.id;
  }
}
