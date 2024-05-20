import { Injectable } from '@nestjs/common';
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class S3Service {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({ region: process.env.REGION, endpoint: process.env.ENDPOINT });
  }

  async uploadFile(key: string, body: string | Buffer): Promise<any> {
    const params = {
      Key: key,
      Body: body,
      Bucket: process.env.OTA_BUCKET,
    };

    try {
      return await this.s3Client.send(new PutObjectCommand(params));
    } catch (err) {
      throw err;
    }
  }

  async getFile(key: string): Promise<Readable> {
    const params = {
      Key: key,
      Bucket: process.env.OTA_BUCKET,
    };

    try {
      const data = await this.s3Client.send(new GetObjectCommand(params));
      return data.Body as Readable;
    } catch (err) {
      throw err;
    }
  }

  async deleteFile(key: string): Promise<any> {
    const params = {
      Key: key,
      Bucket: process.env.OTA_BUCKET,
    };

    try {
      return await this.s3Client.send(new DeleteObjectCommand(params));
    } catch (err) {
      throw err;
    }
  }
}
