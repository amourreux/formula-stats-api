import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DriversModule, DatabaseModule],
})
export class AppModule {}
