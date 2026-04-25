import { Model } from 'mongoose';
import { Bounty } from './schemas/bounty.schema';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
export declare class BountiesService {
    private bountyModel;
    constructor(bountyModel: Model<Bounty>);
    create(createBountyDto: CreateBountyDto): Promise<Bounty>;
    findAll(): Promise<Bounty[]>;
    findActive(): Promise<Bounty[]>;
    findOne(id: string): Promise<Bounty>;
    update(id: string, updateBountyDto: UpdateBountyDto): Promise<Bounty>;
    remove(id: string): Promise<Bounty>;
}
