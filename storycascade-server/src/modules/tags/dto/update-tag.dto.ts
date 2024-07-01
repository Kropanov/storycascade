import { PartialType } from '@nestjs/mapped-types';
import { CreateTagDTO } from './create-tag.dto';

export class UpdateTagDTO extends PartialType(CreateTagDTO) {}
