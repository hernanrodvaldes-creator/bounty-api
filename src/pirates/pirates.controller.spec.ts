import { Test, TestingModule } from '@nestjs/testing';
import { PiratesController } from './pirates.controller';
import { PiratesService } from './pirates.service';
import { CreatePirateDto } from './dto/create-pirate.dto';

describe('PiratesController', () => {
  let controller: PiratesController;
  let service: PiratesService;

  const mockPiratesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiratesController],
      providers: [
        {
          provide: PiratesService,
          useValue: mockPiratesService,
        },
      ],
    }).compile();

    controller = module.get<PiratesController>(PiratesController);
    service = module.get<PiratesService>(PiratesService);
  });

  it('El controlador debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe crear un pirata', async () => {
      const dto: CreatePirateDto = {
        nombre: 'Roronoa Zoro',
        tripulacion: 'Sombrero de Paja',
        tieneFrutaDelDiablo: false,
      };
      const expected = { ...dto, _id: '123' };

      mockPiratesService.create.mockResolvedValue(expected);

      const result = await controller.create(dto);
      expect(result).toEqual(expected);
      expect(mockPiratesService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('debe retornar todos los piratas', async () => {
      const expected = [{ nombre: 'Nami', tripulacion: 'Sombrero de Paja' }];
      mockPiratesService.findAll.mockResolvedValue(expected);

      const result = await controller.findAll();
      expect(result).toEqual(expected);
    });
  });
});
