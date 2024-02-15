import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { FindAllConstructorDto } from './dto/find-all-constructor.dto';

@Injectable()
export class ConstructorsService {
  constructor(private readonly dbService: DatabaseService) {}

  async findAll(findAllDto: FindAllConstructorDto): Promise<any[]> {
    const { page = 1, limit = 10, sortBy, sortOrder } = findAllDto;
    const client = await this.dbService.pool.connect();
    try {
      let query = 'SELECT * FROM constructors';

      const filters = {
        constructorRef: findAllDto.constructorRef,
        name: findAllDto.name,
        forename: findAllDto.nationality,
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
      const result = await client.query(
        'SELECT * FROM constructors WHERE id = $1',
        [id],
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}
