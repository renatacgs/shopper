import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ride {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: string;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column()
    distance: number;

    @Column()
    duration: string;

    @Column()
    driverId: number;

    @Column()
    driverName: string;

    @Column()
    value: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;
}
