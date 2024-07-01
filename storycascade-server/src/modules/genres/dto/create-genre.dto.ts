import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateGenreDTO {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;
}
