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
  @PrimaryColumn({ length: 2 })
  country_id: string;

  @Column({ length: 40 })
  country_name: string;

  @ManyToOne(() => Region, (region) => region.countries)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @OneToMany(() => Location, (location) => location.country)
  locations: Location[];
}
