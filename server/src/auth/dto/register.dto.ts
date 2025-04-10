import { Module } from '@nestjs/common';
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

@Module({})
export class RegisterDto {
    @IsEmail({}, { message: 'Adresse email invalide.' })
    @IsNotEmpty({ message: 'L\'adresse email est obligatoire.' })
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @MinLength(4, { message: 'Le mot de passe doit contenir au moins 4 caractères.' })
    @IsNotEmpty({ message: 'Le mot de passe est obligatoire.' })
    @ApiProperty({ example: 'strongPassword123' })
    password: string;

    @IsNotEmpty({ message: 'Le nom d’utilisateur est obligatoire.' })
    @MinLength(3, { message: 'Le nom d’utilisateur doit contenir au moins 3 caractères.' })
    @ApiProperty({ example: 'John' })
    username: string;
}
