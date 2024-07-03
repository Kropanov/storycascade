import { PartialType } from '@nestjs/mapped-types';

import { CreateAuthDTO } from './create-auth.dto';

export class UpdateAuthDTO extends PartialType(CreateAuthDTO) {}
