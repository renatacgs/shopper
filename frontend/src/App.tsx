import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
    const [formData, setFormData] = useState({ userId: '', origin: '', destination: '' });
    const [estimate, setEstimate] = useState(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
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
            <input type="text" name="userId" placeholder="ID do Usuário" onChange={handleInputChange} />
            <input type="text" name="origin" placeholder="Origem" onChange={handleInputChange} />
            <input type="text" name="destination" placeholder="Destino" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Estimar</button>

            {estimate && (
                <div>
                    <h2>Estimativa:</h2>
                    <pre>{JSON.stringify(estimate, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default App;
