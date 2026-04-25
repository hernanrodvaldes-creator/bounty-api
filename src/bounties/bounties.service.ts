import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bounty } from './schemas/bounty.schema';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';

@Injectable()
export class BountiesService {
  constructor(
    @InjectModel(Bounty.name) private bountyModel: Model<Bounty>,
  ) {}

  async create(createBountyDto: CreateBountyDto): Promise<Bounty> {
    const newBounty = new this.bountyModel(createBountyDto);
    return await newBounty.save();
  }

  async findAll(): Promise<Bounty[]> {
    return await this.bountyModel.find()
      .populate('pirata')  // Esto trae los datos completos del pirata
      .exec();
  }

  async findActive(): Promise<Bounty[]> {
    return await this.bountyModel.find({ estado: 'Wanted' })
      .populate('pirata')
      .exec();
  }

  async findOne(id: string): Promise<Bounty> {
    const bounty = await this.bountyModel.findById(id)
      .populate('pirata')
      .exec();
    if (!bounty) {
      throw new NotFoundException(`Recompensa con ID ${id} no encontrada`);
    }
    return bounty;
  }

  async update(id: string, updateBountyDto: UpdateBountyDto): Promise<Bounty> {
    const updatedBounty = await this.bountyModel
      .findByIdAndUpdate(id, updateBountyDto, { new: true })
      .populate('pirata')
      .exec();

    if (!updatedBounty) {
      throw new NotFoundException(`Recompensa con ID ${id} no encontrada`);
    }
    return updatedBounty;
  }

  async remove(id: string): Promise<Bounty> {
    const deletedBounty = await this.bountyModel.findByIdAndDelete(id).exec();
    if (!deletedBounty) {
      throw new NotFoundException(`Recompensa con ID ${id} no encontrada`);
    }
    return deletedBounty;
  }
}
