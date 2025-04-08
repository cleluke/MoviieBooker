import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {User} from "./users/users.entity";
import {AuthController} from "./auth/auth.controller";
import {UsersService} from "./users/users.service";
import {AuthService} from "./auth/auth.service";
import {JwtStrategy} from "./auth/jwt/jwt.strategy";
import {JwtGuard} from "./auth/jwt/jwt.guard";
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: +configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', ''),
        password: configService.get<string>('DB_PASSWORD', '123'),
        database: configService.get<string>('DB_DATABASE', 'nest_auth_db'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, AuthService, JwtStrategy, JwtGuard],
})
export class AppModule {}
