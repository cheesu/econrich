import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('jobs')
export class Job {
  @PrimaryColumn({ length: 10 })
  job_id: string;

  @Column({ length: 35 })
  job_title: string;

  @Column('decimal', { precision: 8, scale: 0 })
  min_salary: number;

  @Column('decimal', { precision: 8, scale: 0 })
  max_salary: number;

  @OneToMany(() => Employee, (employee) => employee.job)
  employees: Employee[];
}
