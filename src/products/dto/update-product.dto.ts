import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id: number;
}
