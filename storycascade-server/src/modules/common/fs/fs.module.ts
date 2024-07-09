import { Global, Module } from '@nestjs/common';

import { FileService } from './fs.service';

@Global()
@Module({
  providers: [FileService],
})
export class FileModule {}
