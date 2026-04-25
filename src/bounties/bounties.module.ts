import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BountiesService } from './bounties.service';
import { BountiesController } from './bounties.controller';
import { Bounty, BountySchema } from './schemas/bounty.schema';
import { PiratesModule } from '../pirates/pirates.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bounty.name, schema: BountySchema }]),
    PiratesModule, // Importamos PiratesModule para usar sus servicios
  ],
  controllers: [BountiesController],
  providers: [BountiesService],
})
export class BountiesModule {}
