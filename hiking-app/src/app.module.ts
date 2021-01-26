import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HikesModule } from './hikes/hikes.module';

@Module({
  imports: [HikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
