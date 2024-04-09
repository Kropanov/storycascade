import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // FIXME: remove username -> add email
  async login(@Body() credentials: { username: string; password: string }) {
    const user = await this.authService.validateUser(credentials.username, credentials.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  @Post('signup')
  async signup(@Body() credentials: CreateUserDto) {
    const user = await this.authService.logging(credentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
