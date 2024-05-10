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

  async findAll() {
    const res = await this.postgres.query('SELECT * FROM comments', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM comments where id = $1', [id]);
    return res.rows[0];
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const { userId, novelsId, parentCommentId, content } = updateCommentDto;
    return await this.postgres.query(
      'UPDATE comments SET user_id = $1, novels_id = $2, parent_comment_id = $3, content = $4 WHERE id = $5',
      [userId, novelsId, parentCommentId, content, id],
    );
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM comments WHERE id = $1', [id]);
    return res.rows;
  }
}
