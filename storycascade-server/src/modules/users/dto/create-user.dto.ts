import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Exclude()
export class CreateUserDTO {
  @Expose()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  id?: number;

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
