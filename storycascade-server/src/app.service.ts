import { Injectable } from '@nestjs/common';
import PostgresService from './db';

@Injectable()
export class AppService {
  async getHello(): Promise<object> {
    const postgres = new PostgresService();
    const res = await postgres.query('SELECT * FROM novel where id = 4 LIMIT 100', []);
    console.log(res.rows[0]);
    return [
      {
        title: 'Second World',
        subtitle: 'Games',
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      },
      {
        title: 'Let Me Game in Peace',
        subtitle: 'Urban',
        src: 'https://cdn.vuetifyjs.com/images/cards/three.jpg',
      },
      {
        title: 'My Goalkeeping System',
        subtitle: 'Sports',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      },
      {
        title: 'Rise of the Horde',
        subtitle: 'War',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        title: 'Joy of Life',
        subtitle: 'History',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      },
      {
        title: 'Plague Doctor',
        subtitle: 'Horror',
        src: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
      },
    ];
  }
}
