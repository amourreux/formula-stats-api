import { IsOptional, IsInt, IsString, IsEnum } from 'class-validator';
import { SortOrder } from '../../database/enums/sort-order.enum';
import { Transform } from 'class-transformer';
import { SortByDriverEnum } from '../enums/sort-by-driver.enum';

export class FindAllDriversDto {
  @IsOptional()
  @IsInt()
  @Transform((item) => item.value && parseInt(item.value, 10))
  page?: number;

  @IsInt()
  @IsOptional()
  @Transform((item) => item.value && parseInt(item.value, 10))
  limit?: number;

  @IsOptional()
  @IsEnum(SortByDriverEnum)
  sortBy?: SortByDriverEnum;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;

  @IsString()
  @IsOptional()
  driverRef?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsOptional()
  @IsString()
  forename?: string;

  @IsOptional()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsString()
  nationality?: string;
}
