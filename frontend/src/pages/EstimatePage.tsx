import React, { useState } from 'react';
import RideEstimateForm from '../components/RideEstimateForm';
import axios from 'axios';

const EstimatePage: React.FC = () => {
    const [estimate, setEstimate] = useState(null);

    const handleSubmit = async (formData: { userId: string; origin: string; destination: string }) => {
        try {
            const response = await axios.post('http://localhost:8080/ride/estimate', formData);
            setEstimate(response.data);
        } catch (error) {
            alert('Erro ao estimar viagem');
        }
    };

    return (
        <div>
            <h1>Solicitar Viagem</h1>
            <RideEstimateForm onSubmit={handleSubmit} />
            {estimate && <pre>{JSON.stringify(estimate, null, 2)}</pre>}
        </div>
    );
};

export default EstimatePage;
