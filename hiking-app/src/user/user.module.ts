import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}