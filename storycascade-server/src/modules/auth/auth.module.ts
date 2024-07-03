import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { BcryptService } from './services/bcrypt.service';
import { JwtService } from './services/jwt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtService],
  imports: [UsersModule],
})
export class AuthModule {}
