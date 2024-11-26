import React, { useState } from 'react';
import RideHistory from '../components/RideHistory';
import axios from 'axios';

const HistoryPage: React.FC = () => {
    const [rides, setRides] = useState([]);
    const [customerId, setCustomerId] = useState('');

    const fetchHistory = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/ride/${customerId}`);
            setRides(response.data.rides);
        } catch (error) {
            alert('Erro ao buscar histórico');
        }
    };

    return (
        <div>
            <h1>Histórico de Viagens</h1>
            <input
                type="text"
                placeholder="ID do Usuário"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
            />
            <button onClick={fetchHistory}>Buscar Histórico</button>
            {rides.length > 0 && <RideHistory rides={rides} />}
        </div>
    );
};

export default HistoryPage;
