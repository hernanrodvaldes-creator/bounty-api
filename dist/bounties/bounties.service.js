"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bounty_schema_1 = require("./schemas/bounty.schema");
let BountiesService = class BountiesService {
    bountyModel;
    constructor(bountyModel) {
        this.bountyModel = bountyModel;
    }
    async create(createBountyDto) {
        const newBounty = new this.bountyModel(createBountyDto);
        return await newBounty.save();
    }
    async findAll() {
        return await this.bountyModel.find()
            .populate('pirata')
            .exec();
    }
    async findActive() {
        return await this.bountyModel.find({ estado: 'Wanted' })
            .populate('pirata')
            .exec();
    }
    async findOne(id) {
        const bounty = await this.bountyModel.findById(id)
            .populate('pirata')
            .exec();
        if (!bounty) {
            throw new common_1.NotFoundException(`Recompensa con ID ${id} no encontrada`);
        }
        return bounty;
    }
    async update(id, updateBountyDto) {
        const updatedBounty = await this.bountyModel
            .findByIdAndUpdate(id, updateBountyDto, { new: true })
            .populate('pirata')
            .exec();
        if (!updatedBounty) {
            throw new common_1.NotFoundException(`Recompensa con ID ${id} no encontrada`);
        }
        return updatedBounty;
    }
    async remove(id) {
        const deletedBounty = await this.bountyModel.findByIdAndDelete(id).exec();
        if (!deletedBounty) {
            throw new common_1.NotFoundException(`Recompensa con ID ${id} no encontrada`);
        }
        return deletedBounty;
    }
};
exports.BountiesService = BountiesService;
exports.BountiesService = BountiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bounty_schema_1.Bounty.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BountiesService);
//# sourceMappingURL=bounties.service.js.map