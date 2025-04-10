import {Controller, Post, Body, UseGuards, Request, Get, Delete, Param, BadRequestException} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { JwtGuard } from '../auth/jwt/jwt.guard';
import { FormReservationDto } from './dto/form-reservation.dto';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('Reservations')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    @ApiOperation({ summary: 'Créer une nouvelle réservation' })
    @ApiResponse({ status: 201, description: 'Réservation créée' })
    @ApiResponse({ status: 400, description: 'Conflit horaire ou format invalide' })
    @ApiBody({ type: FormReservationDto })
    create(@Body() dto: FormReservationDto, @Request() req) {
        // Passer l'utilisateur authentifié depuis `req.user`
        return this.reservationService.createReservation(dto, req.user);
    }

    @Get()
    @ApiOperation({ summary: 'Liste des réservations de l’utilisateur' })
    findAll(@Request() req) {
        return this.reservationService.getUserReservations(req.user);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Annule une réservation' })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({ status: 200, description: 'Réservation annulée' })
    @ApiResponse({ status: 404, description: 'Réservation non trouvée' })
    remove(@Param('id') id: string, @Request() req) {
        return this.reservationService.cancelReservation(+id, req.user);
    }
}

