import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class CountriesService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createCountryDto: CreateCountryDto) {
    const { name, code } = createCountryDto;
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

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const { name, code } = updateCountryDto;
    const res = await this.postgres.query('UPDATE countries SET code = $1, name = $2 WHERE id = $3', [code, name, id]);
    return res.rows;
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM countries WHERE id = $1', [id]);
    return res.rows;
  }

  async findOneByName(name: string) {
    const res = await this.postgres.query('SELECT id FROM countries WHERE name = $1', [name]);
    return res.rows[0]?.id;
  }
}
