import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { GetEmployeeDto } from './dto/get-employee.dto';
import { GetHistoryDto } from './dto/get-history.dto';
import { ApiCommonResponses } from 'src/common/api-response';

@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get(':id')
  @ApiOperation({ summary: '특정 사원의 현재 정보 조회' })
  @ApiResponse({
    status: 200,
    description: '해당 사원의 현재 정보',
    type: GetEmployeeDto,
    isArray: false,
  })
  @ApiCommonResponses()
  @ApiParam({
    name: 'id',
    required: true,
    description: '사원 ID',
    type: Number,
  })
  @ApiResponse({
    status: 404,
    description: '해당 사원 번호 찾을 수 없음',
    schema: {
      example: {
        message: 'Employee with ID ${id} not found',
        error: 'Bad Request',
        statusCode: 404,
      },
    },
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOne(+id);
  }

  @Get(':id/history')
  @ApiOperation({ summary: '특정 사원의 이력 조회' })
  @ApiResponse({
    status: 200,
    description: '해당 사원의 이력 정보',
    type: GetHistoryDto,
    isArray: false,
  })
  @ApiCommonResponses()
  @ApiParam({
    name: 'id',
    required: true,
    description: '사원 ID',
    type: Number,
  })
  @ApiResponse({
    status: 404,
    description: '해당 사원 번호 이력 찾을 수 없음',
    schema: {
      example: {
        message: 'Job history for Employee ID ${id} not found',
        error: 'Bad Request',
        statusCode: 404,
      },
    },
  })
  findOneHistory(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOneHistory(+id);
  }
}
