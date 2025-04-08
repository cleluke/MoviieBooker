import { Module } from '@nestjs/common';

@Module({})
export class LoginDto {
    email: string;
    password: string;
}
