import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class CreateNovelDTO {
  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  title: string;

  @Expose()
  @IsOptional()
  @ApiPropertyOptional({ type: Array<string> })
  other_titles: Array<string> | null;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  file_name: string;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  description: string;

  @Expose()
  @IsNumber()
  @IsDefined()
  @ApiProperty({ type: Number })
  chapters: number;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  country: string;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  state: string;

  @Expose()
  @IsArray()
  @IsDefined()
  @ApiProperty({ type: Array<string> })
  genres: Array<string>;

  @Expose()
  @IsArray()
  @IsDefined()
  @ApiProperty({ type: Array<string> })
  tags: Array<string>;
}
