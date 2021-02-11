import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HikesController } from './hikes.controller';
import { HikesService } from './hikes.service';
import { HikeSchema } from './hike.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'hikes', schema: HikeSchema }])],
  controllers: [HikesController],
  providers: [HikesService],
})
export class HikesModule {}
