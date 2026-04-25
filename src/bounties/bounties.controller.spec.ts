import { Test, TestingModule } from '@nestjs/testing';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';
import { CreateBountyDto, BountyStatus } from './dto/create-bounty.dto';

describe('BountiesController', () => {
  let controller: BountiesController;
  let service: BountiesService;

  const mockBountiesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findActive: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BountiesController],
      providers: [
        {
          provide: BountiesService,
          useValue: mockBountiesService,
        },
      ],
    }).compile();

    controller = module.get<BountiesController>(BountiesController);
    service = module.get<BountiesService>(BountiesService);
  });

  it('El controlador debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe crear una recompensa', async () => {
      const dto: CreateBountyDto = {
        cantidadBellys: 300000,
        estado: BountyStatus.WANTED,
        pirata: '507f1f77bcf86cd799439012',
      };
      const expected = { ...dto, _id: '123' };

      mockBountiesService.create.mockResolvedValue(expected);

      const result = await controller.create(dto);
      expect(result).toEqual(expected);
      expect(mockBountiesService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('debe retornar todas las recompensas', async () => {
      const expected = [{ cantidadBellys: 500000, estado: 'Wanted' }];
      mockBountiesService.findAll.mockResolvedValue(expected);

      const result = await controller.findAll();
      expect(result).toEqual(expected);
    });
  });

  describe('findActive', () => {
    it('debe retornar solo recompensas activas', async () => {
      const expected = [
        { cantidadBellys: 500000, estado: 'Wanted' },
        { cantidadBellys: 700000, estado: 'Wanted' },
      ];
      mockBountiesService.findActive.mockResolvedValue(expected);

      const result = await controller.findActive();
      expect(result).toEqual(expected);
      expect(mockBountiesService.findActive).toHaveBeenCalled();
    });
  });
});
