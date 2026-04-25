import { Model } from 'mongoose';
import { Pirate } from './schemas/pirate.schema';
import { CreatePirateDto } from './dto/create-pirate.dto';
export declare class PiratesService {
    private pirateModel;
    constructor(pirateModel: Model<Pirate>);
    create(createPirateDto: CreatePirateDto): Promise<Pirate>;
    findAll(): Promise<Pirate[]>;
    findOne(id: string): Promise<Pirate>;
    remove(id: string): Promise<Pirate>;
}
