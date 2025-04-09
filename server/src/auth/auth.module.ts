import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UsersModule} from "../users/users.module";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt/jwt.strategy";
import {JwtGuard} from "./jwt/jwt.guard";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        ConfigModule,
        UsersModule,
        JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: { expiresIn: '1h' },
        }),
    }), UsersModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtGuard],
})
export class AuthModule {}

//https://dev.to/buildwithgagan/building-a-login-and-registration-system-using-nestjs-with-typeorm-and-postgresql-19hh