import { CanActivate, ExecutionContext, forwardRef, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/service/user.service';
import { User } from '../../user/models/user.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,

    @Inject(forwardRef(() => UserService))
    private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if(!roles) {
        return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: User = request.user.user;

    const userDb = await this.userService.findByMail(user.email);
    const hasRole = () => roles.indexOf(userDb.role) > -1;
    let hasPermission: boolean = false;
    if (hasRole()) {
        hasPermission=true;
    }
    return userDb && hasPermission;
  }
}