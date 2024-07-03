import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class CreateCommentDTO {
  @Expose()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  id?: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  @ApiProperty({ type: Number })
  userId: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  @ApiProperty({ type: Number })
  novelsId: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  @ApiProperty({ type: Number })
  parentCommentId: number;

  @Expose()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String })
  content: string;

  @Expose()
  @IsOptional()
  @ApiPropertyOptional({ type: Date })
  createdAt?: Date;

  @Expose()
  @IsOptional()
  @ApiPropertyOptional({ type: Date })
  updatedAt?: Date;
}
