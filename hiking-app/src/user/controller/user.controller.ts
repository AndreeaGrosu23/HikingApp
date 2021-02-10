import { Body, Controller, Delete, Post, Get, Param, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() user: User): Observable<User> {
        return this.userService.create(user);
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): Observable<User> {
        return this.userService.findOne(params.id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Observable<any> {
        return this.userService.deleteOne(id);
    }

    @Put(':id')
    updateOne(@Param('id') id: number, @Body() user: User): Observable<any> {
        return this.userService.updateOne(id, user);
    }

}
