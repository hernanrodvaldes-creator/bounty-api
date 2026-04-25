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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBountyDto = exports.BountyStatus = void 0;
const class_validator_1 = require("class-validator");
var BountyStatus;
(function (BountyStatus) {
    BountyStatus["WANTED"] = "Wanted";
    BountyStatus["CAPTURED"] = "Captured";
})(BountyStatus || (exports.BountyStatus = BountyStatus = {}));
class CreateBountyDto {
    cantidadBellys;
    estado;
    pirata;
}
exports.CreateBountyDto = CreateBountyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La cantidad de Bellys es requerida' }),
    (0, class_validator_1.IsPositive)({ message: 'La cantidad debe ser positiva' }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateBountyDto.prototype, "cantidadBellys", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El estado es requerido' }),
    (0, class_validator_1.IsEnum)(BountyStatus, { message: 'Estado debe ser Wanted o Captured' }),
    __metadata("design:type", String)
], CreateBountyDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID del pirata es requerido' }),
    (0, class_validator_1.IsMongoId)({ message: 'ID de pirata inválido' }),
    __metadata("design:type", String)
], CreateBountyDto.prototype, "pirata", void 0);
//# sourceMappingURL=create-bounty.dto.js.map