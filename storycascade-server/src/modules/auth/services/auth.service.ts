import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { BcryptService } from './bcrypt.service';
import { JwtService } from './jwt.service';

@Injectable() // FIXME: rework logic of this class
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: CreateUserDto = await this.userService.findOne(email, 'email');
    if (user && (await this.bcryptService.comparePassword(password, user.password_hash))) {
      const token = this.jwtService.createJwt(user.id);
      return { id: user.id, username: user.username, email: user.email, token };
    }
    return null;
  }

  async logging(credentials: CreateUserDto): Promise<any> {
    const { username, email, password } = credentials;
    const password_hash = await this.bcryptService.hashPassword(password);
    await this.userService.create({ username, email, password_hash });
    const user = await this.userService.findOne(email, 'email');
    const token = this.jwtService.createJwt(user.id);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      token,
    };
  }
}
