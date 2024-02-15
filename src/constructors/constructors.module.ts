import { Module } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { ConstructorsController } from './constructors.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConstructorsController],
  providers: [ConstructorsService],
})
export class ConstructorsModule {}
