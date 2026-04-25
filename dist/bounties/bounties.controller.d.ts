import { BountiesService } from './bounties.service';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
export declare class BountiesController {
    private readonly bountiesService;
    constructor(bountiesService: BountiesService);
    create(createBountyDto: CreateBountyDto): Promise<import("./schemas/bounty.schema").Bounty>;
    findAll(): Promise<import("./schemas/bounty.schema").Bounty[]>;
    findActive(): Promise<import("./schemas/bounty.schema").Bounty[]>;
    findOne(id: string): Promise<import("./schemas/bounty.schema").Bounty>;
    update(id: string, updateBountyDto: UpdateBountyDto): Promise<import("./schemas/bounty.schema").Bounty>;
    remove(id: string): Promise<import("./schemas/bounty.schema").Bounty>;
}
