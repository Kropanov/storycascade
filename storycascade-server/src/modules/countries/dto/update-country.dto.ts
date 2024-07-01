import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryDTO } from './create-country.dto';

export class UpdateCountryDTO extends PartialType(CreateCountryDTO) {}
