import React from 'react';

type DriverOption = {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: {
        rating: number;
        comment: string;
    };
    value: number;
};

type Props = {
    drivers: DriverOption[];
    onSelect: (driverId: number) => void;
};

const DriverOptions: React.FC<Props> = ({ drivers, onSelect }) => {
    return (
        <div>
            <h3>Escolha seu motorista</h3>
            <ul>
                {drivers.map((driver) => (
                    <li key={driver.id}>
                        <h4>{driver.name}</h4>
                        <p>{driver.description}</p>
                        <p>Veículo: {driver.vehicle}</p>
                        <p>Avaliação: {driver.review.rating}/5</p>
                        <p>Valor: R${driver.value}</p>
                        <button onClick={() => onSelect(driver.id)}>Escolher</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverOptions;
