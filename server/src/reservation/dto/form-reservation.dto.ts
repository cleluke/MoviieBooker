import {IsNotEmpty, IsString, IsDateString, IsISO8601} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class FormReservationDto {
    @ApiProperty({
        example: '268',
        description: 'ID du film (récupéré via TMDB)',
    })
    @IsString()
    movieTitle: string;


    @ApiProperty({
        example: '2025-04-10T18:00:00.000Z',
        description: 'Date et heure de début de la réservation au format ISO',
    })
    @IsISO8601()
    @IsNotEmpty()
    @IsDateString()
    startTime: string;
}
