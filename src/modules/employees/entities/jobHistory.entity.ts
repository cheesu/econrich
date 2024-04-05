import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Job } from './job.entity';
import { Department } from './department.entity';

@Entity('job_history')
export class JobHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @ManyToOne(() => Employee, (employee) => employee.jobHistories)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => Job, (job) => job)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => Department, (department) => department)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
