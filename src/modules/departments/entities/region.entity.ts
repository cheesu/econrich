import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Country } from './country.entity';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn({ name: 'region_id' })
  regionId: number;

  @Column({ name: 'region_name', length: 25 })
  regionName: string;

  @OneToMany(() => Country, (country) => country.region)
  countries: Country[];
}
