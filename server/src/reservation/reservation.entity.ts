import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    movieTitle: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @ManyToOne(() => User, user => user.reservations, { eager: true })
    @JoinColumn({ name: 'userId' })  // Utilisation explicite de userId comme clé étrangère
    user: User;

    @Column()
    userId: number;
}
