import { PartialType } from '@nestjs/mapped-types';

import { CreateNovelDTO } from './create-novel.dto';

export class UpdateNovelDTO extends PartialType(CreateNovelDTO) {}
