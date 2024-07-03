import { Global, Module } from '@nestjs/common';

import { PostgresService } from './database.service';

@Global()
@Module({
  controllers: [],
  providers: [PostgresService],
})
export class DatabaseModule {}
