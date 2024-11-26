import React, { useState } from 'react';

type Props = {
    onSubmit: (formData: { userId: string; origin: string; destination: string }) => void;
};

const RideEstimateForm: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ userId: '', origin: '', destination: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="userId" placeholder="ID do Usuário" onChange={handleInputChange} />
            <input type="text" name="origin" placeholder="Origem" onChange={handleInputChange} />
            <input type="text" name="destination" placeholder="Destino" onChange={handleInputChange} />
            <button type="submit">Estimar</button>
        </form>
    );
};

export default RideEstimateForm;
