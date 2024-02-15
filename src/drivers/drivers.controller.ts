import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SortOrder } from '../database/enums/sort-order.enum';
import { FindAllDriversDto } from './dto/find-all-driver.dto';
import { DriverDto } from './dto/driver.dto';
import { SortByDriverEnum } from './enums/sort-by-driver.enum';

@ApiTags('Drivers')
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    enumName: 'SortOrder',
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    enum: SortByDriverEnum,
    enumName: 'SortByDriverEnum',
    required: false,
  })
  @ApiOkResponse({ type: [DriverDto] })
  @ApiQuery({ name: 'driverRef', required: false, type: String })
  @ApiQuery({ name: 'code', required: false, type: String })
  @ApiQuery({ name: 'forename', required: false, type: String })
  @ApiQuery({ name: 'surname', required: false, type: String })
  @ApiQuery({ name: 'nationality', required: false, type: String })
  findAll(@Query() findAllDto: FindAllDriversDto): Promise<DriverDto[]> {
    return this.driversService.findAll(findAllDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: DriverDto })
  async findOne(@Param('id') id: number): Promise<DriverDto> {
    const item = await this.driversService.findById(id);

    if (item == null) {
      throw new NotFoundException();
    }

    return item;
  }
}
