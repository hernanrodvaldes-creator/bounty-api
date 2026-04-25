import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PiratesService } from './pirates.service';
import { PiratesController } from './pirates.controller';
import { Pirate, PirateSchema } from './schemas/pirate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pirate.name, schema: PirateSchema }]),
  ],
  controllers: [PiratesController],
  providers: [PiratesService],
  exports: [PiratesService],
})
export class PiratesModule {}
