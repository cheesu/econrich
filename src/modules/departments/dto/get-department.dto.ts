import { Expose, Type } from 'class-transformer';

class ManagerDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}

class RegionDto {
  @Expose()
  regionId: number;

  @Expose()
  regionName: string;
}

class CountryDto {
  @Expose()
  countryId: string;

  @Expose()
  countryName: string;

  @Expose()
  @Type(() => RegionDto)
  region: RegionDto | null;
}

class LocationDto {
  @Expose()
  locationId: number;

  @Expose()
  streetAddress: string;

  @Expose()
  postalCode: string;

  @Expose()
  city: string;

  @Expose()
  stateProvince: string;

  @Expose()
  @Type(() => CountryDto)
  country: CountryDto | null;
}

export class GetDepartmentDto {
  @Expose()
  departmentId: number;

  @Expose()
  departmentName: string;

  @Expose()
  @Type(() => LocationDto)
  location: LocationDto | null;

  @Expose()
  @Type(() => ManagerDto)
  manager: ManagerDto | null;
}
