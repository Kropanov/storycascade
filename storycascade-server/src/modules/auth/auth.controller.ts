import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    const user = await this.authService.validateUser(credentials.email, credentials.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  @Post('signup')
  async signup(@Body() credentials: CreateUserDTO) {
    const user = await this.authService.logging(credentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
