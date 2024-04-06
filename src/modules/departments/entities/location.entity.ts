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
  @PrimaryGeneratedColumn({ name: 'location_id' })
  locationId: number;

  @Column({ name: 'street_address', length: 40, nullable: true })
  streetAddress: string;

  @Column({ name: 'postal_code', length: 12, nullable: true })
  postalCode: string;

  @Column({ name: 'city', length: 30 })
  city: string;

  @Column({ name: 'state_province', length: 25, nullable: true })
  stateProvince: string;

  @ManyToOne(() => Country, (country) => country.locations)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => Department, (department) => department.location)
  departments: Department[];
}
