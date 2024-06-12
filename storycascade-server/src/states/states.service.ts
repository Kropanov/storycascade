import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class StatesService {
  private readonly postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createStateDto: CreateStateDto) {
    const { name, description } = createStateDto;
    const res = await this.postgres.query('INSERT INTO states (name, description) VALUES ($1, $2)', [
      name,
      description,
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

  async update(id: number, updateStateDto: UpdateStateDto) {
    const { name, description } = updateStateDto;
    const res = await this.postgres.query('UPDATE states SET name = $1, description = $2 WHERE id = $3', [
      name,
      description,
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
