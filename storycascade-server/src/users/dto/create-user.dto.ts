export class CreateUserDto {
  id: number;
  username: string | null;
  email: string | null;
  password_hash: string | null;
  created_at: number | null;
  updated_at: number | null;
}
