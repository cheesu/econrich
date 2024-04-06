import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { IncreaseSalaryDto } from './dto/patch-increaseSalary.dto';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Patch(':id/salary-increase')
  increaseSalary(
    @Param('id') id: number,
    @Body() increaseData: IncreaseSalaryDto,
  ) {
    return this.departmentsService.increaseSalary(id, increaseData.rate);
  }
}
