import { Test, TestingModule } from '@nestjs/testing';
import { ReservoirController } from './reservoir.controller';
import { ReservoirService } from './reservoir.service';

describe('ReservoirController', () => {
  let controller: ReservoirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservoirController],
      providers: [ReservoirService],
    }).compile();

    controller = module.get<ReservoirController>(ReservoirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
