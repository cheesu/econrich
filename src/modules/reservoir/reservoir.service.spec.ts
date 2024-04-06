import { Test, TestingModule } from '@nestjs/testing';
import { ReservoirService } from './reservoir.service';

describe('ReservoirService', () => {
  let service: ReservoirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservoirService],
    }).compile();

    service = module.get<ReservoirService>(ReservoirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
