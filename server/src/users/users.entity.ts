import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Reservation} from "../reservation/reservation.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Reservation, reservation => reservation.user)
    reservations: Reservation[];
}

