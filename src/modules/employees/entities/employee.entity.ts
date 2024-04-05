import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from './department.entity';
import { Job } from './job.entity';
import { JobHistory } from './jobHistory.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({ length: 20 })
  first_name: string;

  @Column({ length: 25 })
  last_name: string;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column()
  hire_date: Date;

  @Column('decimal', { precision: 8, scale: 2 })
  salary: number;

  @Column('decimal', { precision: 2, scale: 2, nullable: true })
  commission_pct: number;

  @ManyToOne(() => Job, (job) => job.employees)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => Employee, (manager) => manager.directReports, {
    nullable: true,
  })
  @JoinColumn({ name: 'manager_id' })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReports: Employee[];

  @OneToMany(() => Department, (department) => department.manager)
  managedDepartments: Department[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.employee)
  jobHistories: JobHistory[];
}
