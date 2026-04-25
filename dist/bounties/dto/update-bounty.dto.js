"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBountyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bounty_dto_1 = require("./create-bounty.dto");
class UpdateBountyDto extends (0, mapped_types_1.PartialType)(create_bounty_dto_1.CreateBountyDto) {
}
exports.UpdateBountyDto = UpdateBountyDto;
//# sourceMappingURL=update-bounty.dto.js.map