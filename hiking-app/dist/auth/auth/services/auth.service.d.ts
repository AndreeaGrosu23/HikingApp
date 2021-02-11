import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/models/user.model';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJWT(user: User): Promise<string>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(newPassword: string, passwordHash: string): Promise<any | boolean>;
}
