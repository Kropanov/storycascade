export class CreateUserDto {
  id?: number;
  username: string | null;
  email: string | null;
  password_hash?: string;
  password?: string;
}
