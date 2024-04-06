import { Controller, Get, Query } from '@nestjs/common';
import { ReservoirService } from './reservoir.service';
import { GetReservoirDto } from './dto/get-reservoir.dto';
import { GetReservoirWaterLevelDto } from './dto/get-reservoirWaterLevel.dto';

@Controller('reservoir')
export class ReservoirController {
  constructor(private readonly reservoirService: ReservoirService) {}

  @Get()
  async getEeservoirList(@Query() query: GetReservoirDto) {
    return this.reservoirService.fetchReservoirData(query);
  }

  @Get('water-level')
  async getWaterLevelList(@Query() query: GetReservoirWaterLevelDto) {
    return this.reservoirService.fetchReservoirWaterLevelData(query);
  }
}
