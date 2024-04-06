import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Job } from './job.entity';
import { Department } from '../../departments/entities/department.entity';

@Entity('job_history')
export class JobHistory {
  @PrimaryColumn({ name: 'employee_id' })
  employeeId: number;

  @PrimaryColumn({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => Employee, (employee) => employee.jobHistories)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
