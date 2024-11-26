import React from 'react';
import DriverOptions from '../components/DriverOptions';

const OptionsPage: React.FC = () => {
    const drivers = [
        { id: 1, name: 'Homer Simpson', description: 'Motorista camarada', vehicle: 'Plymouth Valiant 1973', review: { rating: 2, comment: 'Motorista simpático, mas errou o caminho 3 vezes' }, value: 50 },
        { id: 2, name: 'Dominic Toretto', description: 'Motorista rápido e seguro', vehicle: 'Dodge Charger 1970', review: { rating: 4, comment: 'Viagem incrível!' }, value: 100 },
        { id: 3, name: 'James Bond', description: 'Motorista elegante', vehicle: 'Aston Martin DB5', review: { rating: 5, comment: 'Serviço impecável!' }, value: 200 },
    ];

    const handleSelect = (driverId: number) => {
        alert(`Motorista escolhido: ${driverId}`);
    };

    return (
        <div>
            <h1>Opções de Motoristas</h1>
            <DriverOptions drivers={drivers} onSelect={handleSelect} />
        </div>
    );
};

export default OptionsPage;
