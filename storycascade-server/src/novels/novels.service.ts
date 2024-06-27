import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { PostgresService } from '../common/database/database.service';
import { CountriesService } from '../countries/countries.service';
import { StatesService } from '../states/states.service';
import { GenresService } from '../genres/genres.service';
import { TagsService } from '../tags/tags.service';
import { S3Service } from '../common/s3/s3.service';
import { FileService } from '../common/fs/fs.service';

@Injectable()
export class NovelsService {
  private s3Service: S3Service;
  private fileService: FileService;
  private postgres: PostgresService;

  constructor(
    private readonly countriesService: CountriesService,
    private readonly statesService: StatesService,
    private readonly genresService: GenresService,
    private readonly tagsService: TagsService,
  ) {
    this.postgres = new PostgresService();
    this.s3Service = new S3Service();
    this.fileService = new FileService();
  }

  async create(createNovelDto: CreateNovelDto) {
    const { title, other_titles, description, chapters, state, country, genres, tags, file_name } = createNovelDto;

    const state_id = await this.statesService.getIdByName(state);
    const country_id = await this.countriesService.findOneByName(country);

    const res = await this.postgres.query(
      'INSERT INTO novels (title, other_titles, description, chapters, state_id, country_id, poster_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;',
      [title, other_titles[0], description, chapters, state_id, country_id, file_name],
    );

    if (res.rows.length > 0) {
      const novel_id = res.rows[0].id;

      genres.map(async (genre) => {
        const genre_id = await this.genresService.getIdByName(genre);
        await this.genresService.linkGenreToNovel(novel_id, genre_id);
      });

      tags.map(async (tag) => {
        const tag_id = await this.tagsService.getIdByName(tag);
        await this.tagsService.linkTagToNovel(novel_id, tag_id);
      });

      const body = await this.fileService.getFile(file_name);
      await this.s3Service.uploadFile(`novels/posters/${file_name}`, body);
      await this.fileService.deleteFile(file_name);

      return res.rows;
    }

    throw new BadRequestException('Something bad happened', {
      cause: new Error(),
      description: 'Some error',
    });
  }

  async findAll() {
    const res = await this.postgres.query('SELECT * FROM novels', []);
    const novels = res.rows;
    return await Promise.all(
      novels.map(async (novel) => {
        const image = await this.s3Service.getFile(`novels/posters/${novel.poster_id}`);
        return {
          ...novel,
          image,
        };
      }),
    );
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM novels WHERE id = $1', [id]);
    return res.rows[0];
  }

  async update(_id: number, updateNovelDto: UpdateNovelDto) {
    const { title, other_titles, description, chapters, state, country } = updateNovelDto;
    return await this.postgres.query(
      'UPDATE novels SET title = $1, other_titles = $2, description = $3, chapters = $4, state_id = $5, country_id = $6 WHERE id = $7',
      [title, other_titles, description, chapters, state, country, _id],
    );
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM novels WHERE id = $1', [id]);
    return res.rows;
  }
}
