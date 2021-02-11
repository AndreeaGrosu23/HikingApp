import { Body, Controller, Delete, Post, Get, Param, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() user: User): Promise<any> {
        return await this.userService.create(user);
    }

    @Post('login')
    async login(@Body() user: User): Promise<Object> {
        const jwt = await this.userService.login(user);
        return { access_token: jwt };
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params) {
        return await this.userService.findOne(params.id);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number): Promise<any> {
        return await this.userService.deleteOne(id);
    }

    @Put(':id')
    async updateOne(@Param('id') id: number, @Body() user: User): Promise<any> {
        return await this.userService.updateOne(id, user);
    }

}
