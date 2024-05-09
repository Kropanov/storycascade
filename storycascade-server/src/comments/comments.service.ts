import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PostgresService } from '../database/database.service';

@Injectable()
export class CommentsService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createCommentDto: CreateCommentDto) {
    const { userId, novelsId, parentCommentId, content } = createCommentDto;
    const res = await this.postgres.query(
      'INSERT INTO comments (user_id, novels_id, parent_comment_id, content) VALUES ($1, $2, $3, $4)',
      [userId, novelsId, parentCommentId, content],
    );
    return res.rows;
  }

  findAll() {
    return `This action returns all comments`;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM comments where id = $1', [id]);
    return res.rows[0];
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
