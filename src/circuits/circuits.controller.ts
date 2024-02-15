import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CircuitsService } from './circuits.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CircuitDto } from './dto/circuit.dto';

@ApiTags('Circuits')
@Controller('circuits')
export class CircuitsController {
  constructor(private readonly circuitsService: CircuitsService) {}

  @Get()
  @ApiOkResponse({ type: [CircuitDto] })
  async findAll(): Promise<CircuitDto[]> {
    return await this.circuitsService.findAll();
  }

  @ApiOkResponse({ type: CircuitDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CircuitDto> {
    const item = await this.circuitsService.findById(id);

    if (item == null) {
      throw new NotFoundException();
    }

    return item;
  }
}
