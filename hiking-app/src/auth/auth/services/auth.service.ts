import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
import { User } from 'src/user/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async generateJWT(user: User): Promise<string> {
        return await this.jwtService.signAsync({user});
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12);
    }

    async comparePasswords(newPassword: string, passwordHash: string): Promise<any | boolean> {
        return await bcrypt.compare(newPassword, passwordHash);
    }
}
