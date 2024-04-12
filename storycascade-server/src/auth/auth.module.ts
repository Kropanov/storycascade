import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { BcryptService } from './services/bcrypt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BcryptService],
  imports: [UsersModule],
})
export class AuthModule {}
