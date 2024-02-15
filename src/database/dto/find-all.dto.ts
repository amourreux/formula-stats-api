import { IsOptional, IsInt, IsEnum, Min } from 'class-validator';
import { SortOrder } from '../enums/sort-order.enum';
import { Transform } from 'class-transformer';

export class FindAllDto {
  @IsOptional()
  @IsInt()
  @Transform((item) => item.value && parseInt(item.value, 10))
  @Min(1)
  page?: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform((item) => item.value && parseInt(item.value, 10))
  limit?: number;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;
}
