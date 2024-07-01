import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateStateDTO {
  @Expose()
  @IsDefined()
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @Expose()
  @IsDefined()
  @IsString()
  @ApiProperty({ type: String })
  description: string;
}
