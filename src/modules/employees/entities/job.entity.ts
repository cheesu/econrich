import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';
import { JobHistory } from './jobHistory.entity';

@Entity('jobs')
export class Job {
  @PrimaryColumn({ name: 'job_id', length: 10 })
  jobId: string;

  @Column({ name: 'job_title', length: 35 })
  jobTitle: string;

  @Column({
    name: 'min_salary',
    type: 'decimal',
    precision: 8,
    scale: 2,
    nullable: true,
  })
  minSalary: number;

  @Column({
    name: 'max_salary',
    type: 'decimal',
    precision: 8,
    scale: 2,
    nullable: true,
  })
  maxSalary: number;

  @OneToMany(() => Employee, (employee) => employee.job)
  employees: Employee[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job)
  jobHistory: JobHistory[];
}
