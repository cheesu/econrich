import { Controller, Get, Patch, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeesService.findOne(+id);
  }

  @Get(':id/history')
  findOneHistory(@Param('id') id: number) {
    return this.employeesService.findOneHistory(+id);
  }
}
