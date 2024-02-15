import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { FindAllDriversDto } from './dto/find-all-driver.dto';

@Injectable()
export class DriversService {
  constructor(private readonly dbService: DatabaseService) {}

  async findAll(findAllDto: FindAllDriversDto): Promise<any[]> {
    const { page = 1, limit = 10, sortBy, sortOrder } = findAllDto;
    const client = await this.dbService.pool.connect();
    try {
      let query = 'SELECT * FROM drivers';

      const filters = {
        driverRef: findAllDto.driverRef,
        code: findAllDto.code,
        forename: findAllDto.forename,
        surname: findAllDto.surname,
        nationality: findAllDto.nationality,
      };

      // Filtering
      const filterConditions = Object.keys(filters)
        .filter((key) => filters[key] !== undefined) // Exclude undefined filters
        .map((key) => `LOWER(${key}) LIKE LOWER('%${filters[key]}%')`)
        .join(' AND ');
      if (filterConditions) {
        query += ` WHERE ${filterConditions}`;
      }

      // Sorting
      if (sortBy) {
        query += ` ORDER BY ${sortBy} ${sortOrder || 'ASC'}`;
      }

      // Pagination
      const offset = (page - 1) * limit;
      query += ` LIMIT ${limit} OFFSET ${offset}`;

      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async findById(id: number): Promise<any> {
    const client = await this.dbService.pool.connect();
    try {
      const result = await client.query('SELECT * FROM drivers WHERE id = $1', [
        id,
      ]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}
