import { Module } from '@nestjs/common';
import { CircuitsService } from './circuits.service';
import { CircuitsController } from './circuits.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CircuitsController],
  providers: [CircuitsService],
})
export class CircuitsModule {}
