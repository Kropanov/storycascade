import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { PostgresService } from '../common/database/database.service';

@Injectable()
export class UsersService {
  private postgres: PostgresService;

  constructor() {
    this.postgres = new PostgresService();
  }

  async create(body: CreateUserDTO) {
    await this.postgres.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [
      body.username,
      body.email,
      body.password_hash,
    ]);

    return { message: 'User was created!' };
  }

  async findAll() {
    const res = await this.postgres.query('SELECT id, username, email FROM users', []);
    return res.rows;
  }

  async findOne(identifier: number | string, type: 'id' | 'email' | 'name') {
    const queryMap = {
      id: 'SELECT id, username, email FROM users WHERE id = $1',
      email: 'SELECT * FROM users WHERE email = $1',
      name: 'SELECT id, username, email FROM users WHERE username = $1',
    };

    const query = queryMap[type];

    if (!query) {
      throw new Error('Unsupported type');
    }

    const res = await this.postgres.query(query, [identifier]);
    return res.rows[0];
  }

  async update(id: number, body: UpdateUserDTO) {
    await this.postgres.query('UPDATE users SET username = $1, email = $2, password_hash = $3 WHERE id = $4', [
      body.username,
      body.email,
      body.password_hash,
      id,
    ]);

    return { message: 'User was updated!' };
  }

  async remove(id: number) {
    await this.postgres.query('DELETE FROM users WHERE id = $1', [id]);
    return { message: 'User was deleted!' };
  }
}
