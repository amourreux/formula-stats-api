import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CircuitDto } from './dto/circuit.dto';

@Injectable()
export class CircuitsService {
  constructor(private readonly dbService: DatabaseService) {}

  findAll(): Promise<CircuitDto[]> {
    return this.dbService.query('SELECT * FROM circuits');
  }

  async findById(id: number): Promise<CircuitDto> {
    const client = await this.dbService.pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM circuits WHERE id = $1',
        [id],
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}
