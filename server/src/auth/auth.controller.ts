import {Controller, Post, Body, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @UseGuards(JwtGuard)
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Post('login')
    @UseGuards(JwtGuard)
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

}

//https://dev.to/buildwithgagan/building-a-login-and-registration-system-using-nestjs-with-typeorm-and-postgresql-19hh
