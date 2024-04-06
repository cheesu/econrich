import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Location } from './location.entity';
import { Employee } from '../../employees/entities/employee.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn({ name: 'department_id' })
  departmentId: number;

  @Column({ name: 'department_name', length: 30 })
  departmentName: string;

  @ManyToOne(() => Location, (location) => location.departments)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  @Column({ name: 'manager_id', nullable: true })
  managerId: number;

  @ManyToOne(() => Employee, (employee) => employee.managedDepartments)
  @JoinColumn({ name: 'manager_id' })
  manager: Employee;
}
