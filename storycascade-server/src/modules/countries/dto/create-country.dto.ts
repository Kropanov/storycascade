import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateCountryDTO {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  code: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;
}
