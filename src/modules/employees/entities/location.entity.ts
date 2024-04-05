import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Country } from './country.entity';
import { Department } from './department.entity';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column({ length: 40 })
  street_address: string;

  @Column({ length: 12, nullable: true })
  postal_code: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 25, nullable: true })
  state_province: string;

  @ManyToOne(() => Country, (country) => country.locations)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => Department, (department) => department.location)
  departments: Department[];
}
