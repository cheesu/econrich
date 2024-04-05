import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Location } from './location.entity';
import { Employee } from './employee.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column({ length: 30 })
  department_name: string;

  @ManyToOne(() => Location, (location) => location.departments)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  @ManyToOne(() => Employee, (employee) => employee.managedDepartments)
  @JoinColumn({ name: 'manager_id' })
  manager: Employee;
}
