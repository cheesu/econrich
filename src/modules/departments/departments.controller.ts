import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { IncreaseSalaryDto } from './dto/patch-increaseSalary.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { GetDepartmentDto } from './dto/get-department.dto';
import { ResIncreaseSalaryDto } from './dto/res-increaseSalary.dto';
import { ApiCommonResponses } from 'src/common/api-response';

@ApiTags('departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  @ApiOperation({ summary: '부서 조회및 위치 정보 조회' })
  @ApiResponse({
    status: 200,
    description: '부서 정보 및 위치 정보',
    type: GetDepartmentDto,
    isArray: true,
  })
  @ApiCommonResponses()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Patch(':id/salary-increase')
  @ApiOperation({ summary: '부서 직원 급여 인상' })
  @ApiResponse({
    status: 200,
    description: '급여 인상 성공',
    type: ResIncreaseSalaryDto,
  })
  @ApiCommonResponses()
  @ApiParam({
    name: 'id',
    required: true,
    description: '부서 ID',
    type: Number,
  })
  @ApiBody({
    description: '인상할 급여 비율',
    type: IncreaseSalaryDto,
  })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  increaseSalary(
    @Param('id', ParseIntPipe) id: number,
    @Body() increaseData: IncreaseSalaryDto,
  ) {
    return this.departmentsService.increaseSalary(id, increaseData.rate);
  }
}
