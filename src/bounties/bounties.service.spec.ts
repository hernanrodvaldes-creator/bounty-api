import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { Bounty } from './schemas/bounty.schema';

describe('BountiesService', () => {
  let service: BountiesService;
  let model: any;

  const mockBounty = {
    _id: '507f1f77bcf86cd799439011',
    cantidadBellys: 500000,
    estado: 'Wanted',
    pirata: '507f1f77bcf86cd799439012',
  };

  const mockBountyModel = {
    new: jest.fn().mockResolvedValue(mockBounty),
    constructor: jest.fn().mockResolvedValue(mockBounty),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    save: jest.fn(),
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BountiesService,
        {
          provide: getModelToken(Bounty.name),
          useValue: mockBountyModel,
        },
      ],
    }).compile();

    service = module.get<BountiesService>(BountiesService);
    model = module.get(getModelToken(Bounty.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('1. El servicio debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('2. findAll() debe retornar un arreglo de recompensas', () => {
    it('debe retornar todas las recompensas', async () => {
      const expectedBounties = [mockBounty];
      const mockExec = jest.fn().mockResolvedValue(expectedBounties);
      const mockPopulate = jest.fn().mockReturnValue({ exec: mockExec });

      model.find.mockReturnValue({ populate: mockPopulate });

      const result = await service.findAll();
      expect(result).toEqual(expectedBounties);
      expect(model.find).toHaveBeenCalled();
      expect(mockPopulate).toHaveBeenCalledWith('pirata');
    });
  });

  describe('3. findOne() debe lanzar NotFoundException con ID inexistente', () => {
    it('debe lanzar NotFoundException cuando el bounty no existe', async () => {
      const nonExistentId = '507f1f77bcf86cd799439999';
      const mockExec = jest.fn().mockResolvedValue(null);
      const mockPopulate = jest.fn().mockReturnValue({ exec: mockExec });

      model.findById.mockReturnValue({ populate: mockPopulate });

      await expect(service.findOne(nonExistentId)).rejects.toThrow(
        NotFoundException,
      );
      expect(model.findById).toHaveBeenCalledWith(nonExistentId);
    });
  });
});
