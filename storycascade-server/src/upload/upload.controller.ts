import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname, basename } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './src/upload/files',
        filename: (_req, file, callback) => {
          const ext = extname(file.originalname);
          const name = basename(file.originalname, ext);
          callback(null, `${name}${ext}`);
        },
      }),
      limits: { fileSize: 10 * 1024 * 1024 }, // 10 mb
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (file) {
      return { message: 'File uploaded' };
    }
    return { message: 'No file uploaded' };
  }
}
