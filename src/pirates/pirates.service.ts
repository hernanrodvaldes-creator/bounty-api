import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pirate } from './schemas/pirate.schema';
import { CreatePirateDto } from './dto/create-pirate.dto';

@Injectable()
export class PiratesService {
  constructor(
    @InjectModel(Pirate.name) private pirateModel: Model<Pirate>,
  ) {}

  async create(createPirateDto: CreatePirateDto): Promise<Pirate> {
    const newPirate = new this.pirateModel(createPirateDto);
    return await newPirate.save();
  }

  async findAll(): Promise<Pirate[]> {
    return await this.pirateModel.find().exec();
  }

  async findOne(id: string): Promise<Pirate> {
    const pirate = await this.pirateModel.findById(id).exec();
    if (!pirate) {
      throw new NotFoundException(`Pirata con ID ${id} no encontrado`);
    }
    return pirate;
  }

  async remove(id: string): Promise<Pirate> {
    const deletedPirate = await this.pirateModel.findByIdAndDelete(id).exec();
    if (!deletedPirate) {
      throw new NotFoundException(`Pirata con ID ${id} no encontrado`);
    }
    return deletedPirate;
  }
}
