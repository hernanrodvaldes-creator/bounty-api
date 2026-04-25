import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pirate extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  tripulacion: string;

  @Prop({ default: false })
  tieneFrutaDelDiablo: boolean;
}

export const PirateSchema = SchemaFactory.createForClass(Pirate);
