import { Pool } from 'pg';
import * as fs from 'fs';

// TODO: think about logic. If it will be done as a service of nest module,
//  that I no need to do it like singleton, cause It'll be that by default
export default class PostgresService {
  private pool: Pool;
  private static _instance: PostgresService;

  constructor() {
    if (!!PostgresService._instance) {
      return PostgresService._instance;
    }
    PostgresService._instance = this;
    this.pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(process.env.SSL_CA_STRING).toString(),
      },
    });
    return this;
  }

  async query(text: string, params) {
    return await this.pool.query(text, params);
  }
}
