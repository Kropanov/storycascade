import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class CreateGenreDTO {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  name: string;
}
