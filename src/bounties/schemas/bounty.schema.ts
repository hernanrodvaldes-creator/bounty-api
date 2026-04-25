import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pirate } from '../../pirates/schemas/pirate.schema';

export type BountyStatus = 'Wanted' | 'Captured';

@Schema({ timestamps: true })
export class Bounty extends Document {
  @Prop({ required: true, min: 0 })
  cantidadBellys: number;

  @Prop({
    required: true,
    enum: ['Wanted', 'Captured'],
    default: 'Wanted'
  })
  estado: BountyStatus;

  @Prop({ type: Types.ObjectId, ref: 'Pirate', required: true })
  pirata: Types.ObjectId | Pirate;
}

export const BountySchema = SchemaFactory.createForClass(Bounty);
