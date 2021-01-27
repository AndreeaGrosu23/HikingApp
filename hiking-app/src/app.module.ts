import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HikesModule } from './hikes/hikes.module';

@Module({
  imports: [
    HikesModule,
    MongooseModule.forRoot(
      'mongodb+srv://andreea23:hiking@hikingapp.axz53.mongodb.net/hikingApp?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
