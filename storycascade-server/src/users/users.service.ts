import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PostgresService from '../database';

@Injectable()
export class UsersService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(createUserDto: CreateUserDto) {
    const { username, email, password_hash } = createUserDto;
    const res = await this.postgres.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [
      username,
      email,
      password_hash,
    ]);
    return res.rows;
  }

  async findAll() {
    const res = await this.postgres.query('SELECT * FROM users', []);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await this.postgres.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { username, email, password_hash } = updateUserDto;
    return await this.postgres.query('UPDATE users SET username = $1, email = $2, password_hash = $3 WHERE id = $4', [
      username,
      email,
      password_hash,
      id,
    ]);
  }

  async remove(id: number) {
    const res = await this.postgres.query('DELETE FROM users WHERE id = $1', [id]);
    return res.rows;
  }

  async findByUsername(username: string): Promise<CreateUserDto> {
    const res = await this.postgres.query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0];
  }
}
