import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class CreateAuthDTO {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  repeatPassword: string;
}
