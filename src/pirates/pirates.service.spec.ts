import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { PiratesService } from './pirates.service';
import { Pirate } from './schemas/pirate.schema';

// Mock completo del modelo Pirate
const mockPirateModel = {
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  exec: jest.fn(),
};

describe('PiratesService', () => {
  let service: PiratesService;
  let model: any;

  const mockPirate = {
    _id: '507f1f77bcf86cd799439012',
    nombre: 'Monkey D. Luffy',
    tripulacion: 'Sombrero de Paja',
    tieneFrutaDelDiablo: true,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PiratesService,
        {
          provide: getModelToken(Pirate.name),
          useValue: mockPirateModel,
        },
      ],
    }).compile();

    service = module.get<PiratesService>(PiratesService);
    model = module.get(getModelToken(Pirate.name));
    jest.clearAllMocks();
  });

  it('El servicio debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe retornar un arreglo de piratas', async () => {
      const expectedPirates = [mockPirate];
      const mockExec = jest.fn().mockResolvedValue(expectedPirates);
      mockPirateModel.find.mockReturnValue({ exec: mockExec });

      const result = await service.findAll();
      expect(result).toEqual(expectedPirates);
      expect(mockPirateModel.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('debe lanzar NotFoundException si el pirata no existe', async () => {
      const nonExistentId = '507f1f77bcf86cd799439999';
      const mockExec = jest.fn().mockResolvedValue(null);
      mockPirateModel.findById.mockReturnValue({ exec: mockExec });

      await expect(service.findOne(nonExistentId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockPirateModel.findById).toHaveBeenCalledWith(nonExistentId);
    });

    it('debe retornar un pirata si existe', async () => {
      const mockExec = jest.fn().mockResolvedValue(mockPirate);
      mockPirateModel.findById.mockReturnValue({ exec: mockExec });

      const result = await service.findOne(mockPirate._id);
      expect(result).toEqual(mockPirate);
    });
  });
});
