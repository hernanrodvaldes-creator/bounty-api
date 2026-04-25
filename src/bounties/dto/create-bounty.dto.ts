import { IsNotEmpty, IsPositive, IsEnum, IsMongoId, Min } from 'class-validator';

export enum BountyStatus {
  WANTED = 'Wanted',
  CAPTURED = 'Captured',
}

export class CreateBountyDto {
  @IsNotEmpty({ message: 'La cantidad de Bellys es requerida' })
  @IsPositive({ message: 'La cantidad debe ser positiva' })
  @Min(0)
  cantidadBellys: number;

  @IsNotEmpty({ message: 'El estado es requerido' })
  @IsEnum(BountyStatus, { message: 'Estado debe ser Wanted o Captured' })
  estado: BountyStatus;

  @IsNotEmpty({ message: 'El ID del pirata es requerido' })
  @IsMongoId({ message: 'ID de pirata inválido' })
  pirata: string;
}
