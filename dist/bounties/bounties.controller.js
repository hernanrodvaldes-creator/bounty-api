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
exports.BountiesController = void 0;
const common_1 = require("@nestjs/common");
const bounties_service_1 = require("./bounties.service");
const create_bounty_dto_1 = require("./dto/create-bounty.dto");
const update_bounty_dto_1 = require("./dto/update-bounty.dto");
let BountiesController = class BountiesController {
    bountiesService;
    constructor(bountiesService) {
        this.bountiesService = bountiesService;
    }
    create(createBountyDto) {
        return this.bountiesService.create(createBountyDto);
    }
    findAll() {
        return this.bountiesService.findAll();
    }
    findActive() {
        return this.bountiesService.findActive();
    }
    findOne(id) {
        return this.bountiesService.findOne(id);
    }
    update(id, updateBountyDto) {
        return this.bountiesService.update(id, updateBountyDto);
    }
    remove(id) {
        return this.bountiesService.remove(id);
    }
};
exports.BountiesController = BountiesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bounty_dto_1.CreateBountyDto]),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bounty_dto_1.UpdateBountyDto]),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BountiesController.prototype, "remove", null);
exports.BountiesController = BountiesController = __decorate([
    (0, common_1.Controller)('bounties'),
    __metadata("design:paramtypes", [bounties_service_1.BountiesService])
], BountiesController);
//# sourceMappingURL=bounties.controller.js.map