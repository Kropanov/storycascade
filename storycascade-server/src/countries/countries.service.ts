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

  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll() {
    const res = await this.postgres.query('SELECT name FROM countries', []);
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
