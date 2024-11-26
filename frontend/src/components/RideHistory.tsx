import React from 'react';

type Ride = {
    id: number;
    date: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driverName: string;
    value: number;
};

type Props = {
    rides: Ride[];
};

const RideHistory: React.FC<Props> = ({ rides }) => {
    return (
        <div>
            <h3>Histórico de Viagens</h3>
            <ul>
                {rides.map((ride) => (
                    <li key={ride.id}>
                        {ride.date} - {ride.origin} para {ride.destination} - Motorista: {ride.driverName} - Valor: R${ride.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RideHistory;
