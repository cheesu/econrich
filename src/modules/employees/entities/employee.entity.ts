import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from '../../departments/entities/department.entity';
import { Job } from './job.entity';
import { JobHistory } from './jobHistory.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn({ name: 'employee_id' })
  employeeId: number;

  @Column({ name: 'first_name', length: 20 })
  firstName: string;

  @Column({ name: 'last_name', length: 25 })
  lastName: string;

  @Column({ name: 'email', length: 25 })
  email: string;

  @Column({ name: 'phone_number', length: 20, nullable: true })
  phoneNumber: string;

  @Column({ name: 'hire_date' })
  hireDate: Date;

  @Column({ name: 'salary', type: 'decimal', precision: 8, scale: 2 })
  salary: number;

  @Column({
    name: 'commission_pct',
    type: 'decimal',
    precision: 2,
    scale: 2,
    nullable: true,
  })
  commissionPct: number;

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

  @OneToMany(() => Employee, (directReport) => directReport.manager)
  directReports: Employee[];

  @OneToMany(() => Department, (department) => department.manager)
  managedDepartments: Department[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.employee)
  jobHistories: JobHistory[];
}
