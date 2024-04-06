import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Region } from './region.entity';
import { Location } from './location.entity';

@Entity('countries')
export class Country {
  @PrimaryColumn({ name: 'country_id', length: 2 })
  countryId: string;

  @Column({ name: 'country_name', length: 40 })
  countryName: string;

  @ManyToOne(() => Region, (region) => region.countries)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @OneToMany(() => Location, (location) => location.country)
  locations: Location[];
}
