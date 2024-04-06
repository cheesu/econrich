import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ReservoirService } from './reservoir.service';
import { ReservoirController } from './reservoir.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ReservoirController],
  providers: [ReservoirService],
})
export class ReservoirModule {}
