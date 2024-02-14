import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('f1')
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const item = await this.driversService.findById(id);

    if (item == null) {
      throw new NotFoundException();
    }

    return item;
  }
}
