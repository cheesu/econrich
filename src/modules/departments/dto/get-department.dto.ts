import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ManagerDto {
  @ApiProperty({ description: "Manager's first name", example: 'Jennifer' })
  @Expose()
  firstName: string;

  @ApiProperty({ description: "Manager's last name", example: 'Whalen' })
  @Expose()
  lastName: string;
}

class RegionDto {
  @ApiProperty({ description: 'Region ID', example: 2 })
  @Expose()
  regionId: number;

  @ApiProperty({ description: 'Region name', example: 'Americas' })
  @Expose()
  regionName: string;
}

class CountryDto {
  @ApiProperty({ description: 'Country ID', example: 'US' })
  @Expose()
  countryId: string;

  @ApiProperty({
    description: 'Country name',
    example: 'United States of America',
  })
  @Expose()
  countryName: string;

  @ApiProperty({ description: 'Region details' })
  @Expose()
  @Type(() => RegionDto)
  region: RegionDto | null;
}

class LocationDto {
  @ApiProperty({ description: 'Location ID', example: 1700 })
  @Expose()
  locationId: number;

  @ApiProperty({ description: 'Street address', example: '2004 Charade Rd' })
  @Expose()
  streetAddress: string;

  @ApiProperty({ description: 'Postal code', example: '98199' })
  @Expose()
  postalCode: string;

  @ApiProperty({ description: 'City', example: 'Seattle' })
  @Expose()
  city: string;

  @ApiProperty({ description: 'State or province', example: 'Washington' })
  @Expose()
  stateProvince: string;

  @ApiProperty({ description: 'Country details' })
  @Expose()
  @Type(() => CountryDto)
  country: CountryDto | null;
}

export class GetDepartmentDto {
  @ApiProperty({ description: 'Department ID', example: 10 })
  @Expose()
  departmentId: number;

  @ApiProperty({ description: 'Department name', example: 'Administration' })
  @Expose()
  departmentName: string;

  @ApiProperty({ description: 'Location details' })
  @Expose()
  @Type(() => LocationDto)
  location: LocationDto | null;

  @ApiProperty({ description: 'Manager details' })
  @Expose()
  @Type(() => ManagerDto)
  manager: ManagerDto | null;
}
