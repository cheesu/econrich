import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Country } from './country.entity';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  region_id: number;

  @Column({ length: 25 })
  region_name: string;

  @OneToMany(() => Country, (country) => country.region)
  countries: Country[];
}
