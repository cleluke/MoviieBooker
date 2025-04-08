import { Module } from '@nestjs/common';

@Module({})
export class RegisterDto {
    email: string;
    password: string;
    username: string;
}
