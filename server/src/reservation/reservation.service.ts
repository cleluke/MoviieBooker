import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { FormReservationDto } from './dto/form-reservation.dto';
import { User } from '../users/users.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation)
        private reservationRepo: Repository<Reservation>,
    ) {}

    async createReservation(dto: FormReservationDto, user: User) {
        const startTime = new Date(dto.startTime);
        const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // +2h

        const latest = await this.reservationRepo.find({
            where: { user },
            order: { startTime: 'DESC' },
            take: 1,
        });

        if (latest[0] && startTime.getTime() < latest[0].endTime.getTime() + 2 * 60 * 60 * 1000) {
            throw new BadRequestException('Tu dois attendre 2h entre deux réservations');
        }

        const conflicts = await this.reservationRepo.find({
            where: { user },
        });

        for (const res of conflicts) {
            if (
                (startTime >= res.startTime && startTime < res.endTime) ||
                (endTime > res.startTime && endTime <= res.endTime)
            ) {
                throw new BadRequestException('Conflit de créneau avec une autre réservation');
            }
        }

        const reservation = this.reservationRepo.create({
            movieTitle: dto.movieTitle,
            startTime,
            endTime,
            user,
        });

        return this.reservationRepo.save(reservation);
    }

    async getUserReservations(user: User) {
        return this.reservationRepo.find({
            where: { user },
        });
    }

    async cancelReservation(id: number, user: User) {
        const res = await this.reservationRepo.findOne({
            where: { id, user },
        });

        if (!res) {
            throw new BadRequestException('Réservation introuvable ou non autorisée');
        }

        await this.reservationRepo.remove(res);
        return { message: 'Réservation annulée' };
    }
}



