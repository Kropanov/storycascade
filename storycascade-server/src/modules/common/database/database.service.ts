import { Pool } from 'pg';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(process.env.SSL_CA_STRING).toString(),
      },
    });
  }

  async query(text: string, params) {
    return await this.pool.query(text, params);
  }
}
