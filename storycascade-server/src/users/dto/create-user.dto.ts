export class CreateUserDto {
  username: string | null;
  email: string | null;
  password_hash?: string;
  password?: string;
}
