import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ReservoirService } from './reservoir.service';
import { ReservoirController } from './reservoir.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 10000,
        maxRedirects: 10,
      }),
    }),
  ],
  controllers: [ReservoirController],
  providers: [ReservoirService],
})
export class ReservoirModule {}
