import {Controller, Post, Body, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtGuard } from './jwt/jwt.guard';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @UseGuards(JwtGuard)
    @ApiOperation({ summary: 'Créer un compte utilisateur' })
    @ApiBody({ type: RegisterDto })
    @ApiResponse({ status: 201, description: 'Utilisateur inscrit avec succès' })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Post('login')
    @UseGuards(JwtGuard)
    @ApiOperation({ summary: 'Se connecter avec email et mot de passe' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 200, description: 'Connexion réussie avec token' })
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

}

//https://dev.to/buildwithgagan/building-a-login-and-registration-system-using-nestjs-with-typeorm-and-postgresql-19hh
