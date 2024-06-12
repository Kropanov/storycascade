import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { PostgresService } from '../common/database/database.service';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class NovelsService {
  private postgres: PostgresService;

  constructor(private readonly countriesService: CountriesService) {
    this.postgres = new PostgresService();
  }

  async create(createNovelDto: CreateNovelDto) {
    const { country } = createNovelDto;

    const country_id = await this.countriesService.findOneByName(country);
    // const res = await this.postgres.query(
    //   'INSERT INTO novels (title, other_titles, description, chapters, state_id, country_id) VALUES ($1, $2, $3, $4, $5, $6)',
    //   [title, other_titles, description, chapters, state_id, country_id],
    // );
    // return res.rows;

    return country_id;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT * FROM novels', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM novels WHERE id = $1', [id]);
    return res.rows[0];
  }

  async update(_id: number, updateNovelDto: UpdateNovelDto) {
    const { title, other_titles, description, chapters, state_id, country } = updateNovelDto;
    return await this.postgres.query(
      'UPDATE novels SET title = $1, other_titles = $2, description = $3, chapters = $4, state_id = $5, country_id = $6 WHERE id = $7',
      [title, other_titles, description, chapters, state_id, country, _id],
    );
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM novels WHERE id = $1', [id]);
    return res.rows;
  }
}
