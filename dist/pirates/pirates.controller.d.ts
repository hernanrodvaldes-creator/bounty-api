import { PiratesService } from './pirates.service';
import { CreatePirateDto } from './dto/create-pirate.dto';
export declare class PiratesController {
    private readonly piratesService;
    constructor(piratesService: PiratesService);
    create(createPirateDto: CreatePirateDto): Promise<import("./schemas/pirate.schema").Pirate>;
    findAll(): Promise<import("./schemas/pirate.schema").Pirate[]>;
    findOne(id: string): Promise<import("./schemas/pirate.schema").Pirate>;
    remove(id: string): Promise<import("./schemas/pirate.schema").Pirate>;
}
