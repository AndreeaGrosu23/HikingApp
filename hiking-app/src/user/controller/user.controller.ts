import { Body, Controller, Delete, Post, Get, Param, Put, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { User, UserRole } from '../models/user.model';
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

    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
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
    async updateOne(@Param('id') id: string, @Body() user: User): Promise<any> {
        return await this.userService.updateOne(id, user);
    }

    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Put(':id/role')
    async updateRoleOfUser(@Param('id') id: string, @Body() user: User): Promise<User> {
        return await this.userService.updateRoleOfUser(id, user);
    }

}
