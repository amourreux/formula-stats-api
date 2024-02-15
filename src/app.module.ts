import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { DatabaseModule } from './database/database.module';
import { CircuitsModule } from './circuits/circuits.module';

@Module({
  imports: [DriversModule, DatabaseModule, CircuitsModule],
})
export class AppModule {}
