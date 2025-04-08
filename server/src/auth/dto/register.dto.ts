import { Module } from '@nestjs/common';
import {ApiProperty} from "@nestjs/swagger";

@Module({})
export class RegisterDto {
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ example: 'strongPassword123' })
    password: string;

    @ApiProperty({ example: 'John' })
    username: string;
}
