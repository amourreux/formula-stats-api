import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DriversService {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(process.env.DB_PORT, 5432),
    });
  }

  async findAll(): Promise<any[]> {
    const client = await this.pool.connect();
    try {
      const result = await client.query('SELECT * FROM drivers');
      return result.rows;
    } finally {
      client.release();
    }
  }

  async findById(id: number): Promise<any> {
    const client = await this.pool.connect();
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
