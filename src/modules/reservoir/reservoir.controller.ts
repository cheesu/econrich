import { Controller, Get, Query } from '@nestjs/common';
import { ReservoirService } from './reservoir.service';
import { GetReservoirDto } from './dto/get-reservoir.dto';
import { GetReservoirWaterLevelDto } from './dto/get-reservoirWaterLevel.dto';
import {
  ApiOperation,
  ApiTags,
  ApiQuery,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';

import { ReservoirResponseDto } from './dto/res-reservoir.dto';
import { ApiCommonReservoirResponses } from 'src/common/api-reservoir-response';

@ApiTags('reservoir')
@Controller('reservoir')
export class ReservoirController {
  constructor(private readonly reservoirService: ReservoirService) {}

  @Get()
  @ApiOperation({ summary: '저수지 조회' })
  @ApiOkResponse({
    description: '저수지 목록 반환',
    schema: {
      allOf: [
        { $ref: getSchemaPath(ReservoirResponseDto) }, // DTO 구조를 참조하여 문서화
      ],
    },
  })
  @ApiQuery({
    name: 'facName',
    required: false,
    description: '저수지명  (facName과 county 중 최소 하나는 필수)',
    example: '예당(대흥)',
  })
  @ApiQuery({
    name: 'county',
    required: false,
    description: '지역명  (facName과 county 중 최소 하나는 필수)',
    example: '충청남도',
  })
  @ApiQuery({
    name: 'pageNo',
    required: true,
    description: '페이지 번호',
    type: Number,
    example: 1,
  })
  @ApiCommonReservoirResponses()
  async getEeservoirList(@Query() query: GetReservoirDto) {
    return this.reservoirService.fetchReservoirData(query);
  }

  @Get('water-level')
  @ApiOperation({ summary: '저수지 수위 정보 조회' })
  @ApiOkResponse({
    description: '저수지 수위 정보 반환',
    type: ReservoirResponseDto,
  })
  @ApiQuery({
    name: 'facCode',
    required: true,
    description: '저수지 코드',
    type: String,
    example: '4481010021',
  })
  @ApiQuery({
    name: 'dateS',
    required: true,
    description: '조회 시작 날짜 (YYYYMMDD)',
    type: String,
    example: '20240101',
  })
  @ApiQuery({
    name: 'dateE',
    required: true,
    description: '조회 종료 날짜 (YYYYMMDD)',
    type: String,
    example: '20240131',
  })
  @ApiQuery({
    name: 'pageNo',
    required: true,
    description: '페이지 번호',
    type: Number,
    example: 1,
  })
  @ApiCommonReservoirResponses()
  async getWaterLevelList(@Query() query: GetReservoirWaterLevelDto) {
    return this.reservoirService.fetchReservoirWaterLevelData(query);
  }
}
