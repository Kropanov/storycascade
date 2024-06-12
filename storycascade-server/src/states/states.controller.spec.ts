import { Test, TestingModule } from '@nestjs/testing';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';

describe('StatesController', () => {
  let controller: StatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatesController],
      providers: [StatesService],
    }).compile();

    controller = module.get<StatesController>(StatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
