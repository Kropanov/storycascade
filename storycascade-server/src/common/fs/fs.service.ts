import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  private getFilePath(fileName: string) {
    return path.join(__dirname, '../../..', 'src', 'upload', 'files', fileName);
  }

  async getFile(fileName: string) {
    const filePath = this.getFilePath(fileName);
    return fs.createReadStream(filePath);
  }

  async deleteFile(fileName: string) {
    const filePath = this.getFilePath(fileName);
    return new Promise<void>((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}
