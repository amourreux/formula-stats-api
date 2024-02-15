import { IsOptional, IsInt, IsString, IsEnum } from 'class-validator';
import { SortOrder } from '../enums/sort-order.enum';

export class FindAllDto {
  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  limit?: number;

  @IsOptional()
  @IsString()
  sortBy?: string;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;

  @IsOptional()
  filters?: any;
}
