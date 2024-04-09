import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { BcryptService } from './bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly bcryptService: BcryptService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user: CreateUserDto = await this.userService.findByUsername(username);
    if (user && (await this.bcryptService.comparePassword(password, user.password_hash))) {
      return user;
    }
    return null;
  }

  async logging(credentials: CreateUserDto): Promise<any> {
    const { username, email, password } = credentials;
    const password_hash = await this.bcryptService.hashPassword(password);
    return await this.userService.create({ username, email, password_hash });
  }
}
