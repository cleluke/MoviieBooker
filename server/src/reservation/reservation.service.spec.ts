import { Test, TestingModule } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { FormReservationDto } from './dto/form-reservation.dto';
import { BadRequestException } from '@nestjs/common';
import { User } from '../users/users.entity';

describe('ReservationService', () => {
  /*let service: ReservationService;
  let reservationRepo: jest.Mocked<Partial<Repository<Reservation>>>;

  const mockUser: User = { id: 1, email: 'test@test.com' } as User;

  beforeEach(async () => {
    reservationRepo = {
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      findOneBy: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReservationService,
        {
          provide: getRepositoryToken(Reservation),
          useValue: reservationRepo,
        },
      ],
    }).compile();

    service = module.get<ReservationService>(ReservationService);
  });

  describe('createReservation', () => {
    it('should create a reservation when no conflicts or timing issues', async () => {
      const dto: FormReservationDto = {
        movieTitle: 'Inception',
        startTime: new Date('2025-04-10T10:00:00Z').toISOString(),
      };

      reservationRepo.find.mockResolvedValue([]);
      reservationRepo.create.mockReturnValue({
        ...dto,
        startTime: new Date(dto.startTime),
        endTime: new Date(new Date(dto.startTime).getTime() + 2 * 60 * 60 * 1000),
        user: mockUser,
      } as Reservation);

      reservationRepo.save.mockResolvedValue({ id: 1 });

      const result = await service.createReservation(dto, mockUser);
      expect(reservationRepo.save).toHaveBeenCalled();
      expect(result.id).toBe(1);
    });

    it('should throw if user has a reservation within 2h before new one', async () => {
      const dto: FormReservationDto = {
        movieTitle: 'Test',
        startTime: new Date('2025-04-10T12:00:00Z').toISOString(),
      };

      const previousReservation = {
        startTime: new Date('2025-04-10T09:30:00Z'),
        endTime: new Date('2025-04-10T11:30:00Z'),
      };

      reservationRepo.find.mockResolvedValueOnce([previousReservation]);

      await expect(service.createReservation(dto, mockUser)).rejects.toThrow(
          'Tu dois attendre 2h entre deux réservations',
      );
    });

    it('should throw if time slot conflicts with another reservation', async () => {
      const dto: FormReservationDto = {
        movieTitle: 'Test',
        startTime: new Date('2025-04-10T13:00:00Z').toISOString(),
      };

      const otherReservation = {
        startTime: new Date('2025-04-10T14:00:00Z'),
        endTime: new Date('2025-04-10T16:00:00Z'),
      };

      reservationRepo.find.mockResolvedValueOnce([]); // Pas de blocage 2h
      reservationRepo.find.mockResolvedValueOnce([otherReservation]); // pour chevauchement

      await expect(service.createReservation(dto, mockUser)).rejects.toThrow(
          'Conflit de créneau avec une autre réservation',
      );
    });
  });

  describe('getUserReservations', () => {
    it('should return reservations for a user', async () => {
      const reservations = [{ id: 1 }, { id: 2 }];
      reservationRepo.find.mockResolvedValue(reservations as Reservation[]);

      const result = await service.getUserReservations(mockUser);
      expect(result.length).toBe(2);
    });
  });

  describe('cancelReservation', () => {
    it('should delete a reservation if it belongs to user', async () => {
      reservationRepo.findOneBy.mockResolvedValue({ id: 1, user: mockUser } as Reservation);
      reservationRepo.remove.mockResolvedValue({});

      const result = await service.cancelReservation(1, mockUser);
      expect(result.message).toBe('Réservation annulée');
    });

    it('should throw if reservation not found or not owned by user', async () => {
      reservationRepo.findOneBy.mockResolvedValue(null);

      await expect(service.cancelReservation(99, mockUser)).rejects.toThrow(
          'Réservation introuvable ou non autorisée',
      );
    });
  });*/
});
