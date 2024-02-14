import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class DriversService {
  constructor(private readonly dbService: DatabaseService) {}

  async findAll(): Promise<any[]> {
    const client = await this.dbService.pool.connect();
    try {
      const result = await client.query('SELECT * FROM drivers');
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
