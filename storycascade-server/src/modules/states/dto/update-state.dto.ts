import { PartialType } from '@nestjs/mapped-types';
import { CreateStateDTO } from './create-state.dto';

export class UpdateStateDTO extends PartialType(CreateStateDTO) {}
