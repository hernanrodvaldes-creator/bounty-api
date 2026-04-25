"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePirateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pirate_dto_1 = require("./create-pirate.dto");
class UpdatePirateDto extends (0, mapped_types_1.PartialType)(create_pirate_dto_1.CreatePirateDto) {
}
exports.UpdatePirateDto = UpdatePirateDto;
//# sourceMappingURL=update-pirate.dto.js.map