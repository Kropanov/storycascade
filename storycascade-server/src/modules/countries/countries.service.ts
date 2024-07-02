import { Injectable } from '@nestjs/common';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class CountriesService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(body: CreateCountryDTO) {
    const { name, code } = body;
    const res = await this.postgres.query('INSERT INTO countries (code, name) VALUES ($1, $2)', [code, name]);
    return res.rows[0];
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM countries', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT name, code FROM countries WHERE id = $1', [id]);
    return res.rows;
  }

  async update(id: number, body: UpdateCountryDTO) {
    const { name, code } = body;
    const res = await this.postgres.query('UPDATE countries SET code = $1, name = $2 WHERE id = $3', [code, name, id]);
    return res.rows;
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM countries WHERE id = $1', [id]);
    return res.rows;
  }

  // FIXME: refactor name of this method
  async findOneByName(name: string) {
    const res = await this.postgres.query('SELECT id FROM countries WHERE name = $1', [name]);
    return res.rows[0]?.id;
  }
}
