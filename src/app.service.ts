import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly logger = new Logger(AppService.name);

  constructor(private dataSource: DataSource) {}

  async testDatabaseConnection(): Promise<void> {
    try {
      await this.dataSource.query('SELECT 1'); // 단순한 쿼리를 실행하여 DB 연결을 테스트합니다.
      this.logger.log('Database connection successful');
    } catch (error) {
      this.logger.error('Database connection failed', error);
    }
  }
}
