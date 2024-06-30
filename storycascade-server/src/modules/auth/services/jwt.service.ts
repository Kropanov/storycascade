import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class JwtService {
  createJwt(id: number) {
    return sign({ id }, process.env.JWT_SECRET || '', {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  verifyJwt(token: string) {
    return verify(token, process.env.JWT_SECRET || '');
  }
}
