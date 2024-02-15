import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ConstructorDto } from './dto/constructors.dto';
import { SortOrder } from '../database/enums/sort-order.enum';
import { SortByConstructorEnum } from './enums/sort-by-constructors.enum';
import { FindAllConstructorDto } from './dto/find-all-constructor.dto';

@ApiTags('Constructors')
@Controller('constructors')
export class ConstructorsController {
  constructor(private readonly constructorsService: ConstructorsService) {}

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
    enum: SortByConstructorEnum,
    enumName: 'SortByConstructorEnum',
    required: false,
  })
  @ApiQuery({ name: 'constructorRef', required: false, type: String })
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'nationality', required: false, type: String })
  @ApiOkResponse({ type: [ConstructorDto] })
  findAll(
    @Query() findAllDto: FindAllConstructorDto,
  ): Promise<ConstructorDto[]> {
    return this.constructorsService.findAll(findAllDto);
  }

  @ApiOkResponse({ type: ConstructorDto })
  @Get(':id')
  async find(@Param('id') id: number): Promise<ConstructorDto> {
    const item = await this.constructorsService.findById(id);

    if (item == null) {
      throw new NotFoundException();
    }

    return item;
  }
}
