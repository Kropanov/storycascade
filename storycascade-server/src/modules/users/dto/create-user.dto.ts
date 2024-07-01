import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateUserDTO {
  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  username: string;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  email: string;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  password_hash: string;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  password: string;
}
