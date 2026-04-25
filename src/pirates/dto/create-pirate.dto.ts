import { IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePirateDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString()
  nombre: string;

  @IsNotEmpty({ message: 'La tripulación es requerida' })
  @IsString()
  tripulacion: string;

  @IsOptional()
  @IsBoolean()
  tieneFrutaDelDiablo?: boolean;
}
