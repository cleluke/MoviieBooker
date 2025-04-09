import { Module } from '@nestjs/common';
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

@Module({})
export class RegisterDto {
    @IsNotEmpty({ message: 'Le nom d’utilisateur est obligatoire.' })
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @IsEmail({}, { message: 'Adresse email invalide.' })
    @ApiProperty({ example: 'strongPassword123' })
    password: string;

    @MinLength(4, { message: 'Le mot de passe doit contenir au moins 4 caractères.' })
    @ApiProperty({ example: 'John' })
    username: string;
}
