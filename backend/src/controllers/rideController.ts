import { Request, Response } from 'express';
import axios from 'axios';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// Estimar viagem
export const estimateRide = async (req: Request, res: Response) => {
    const { customer_id, origin, destination } = req.body;

    if (!customer_id || !origin || !destination || origin === destination) {
        return res.status(400).json({ error_code: "INVALID_DATA", error_description: "Dados inválidos" });
    }

    try {
        const routeResponse = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
            params: { origin, destination, key: GOOGLE_API_KEY },
        });

        const distance = routeResponse.data.routes[0].legs[0].distance.value / 1000; // km
        const duration = routeResponse.data.routes[0].legs[0].duration.text;

        const drivers = [
            { id: 1, name: 'Homer Simpson', rate: 2.5, minDistance: 1 },
            { id: 2, name: 'Dominic Toretto', rate: 5.0, minDistance: 5 },
            { id: 3, name: 'James Bond', rate: 10.0, minDistance: 10 },
        ].filter(driver => distance >= driver.minDistance)
          .map(driver => ({
              ...driver,
              value: parseFloat((distance * driver.rate).toFixed(2)),
          }));

        res.json({
            origin: routeResponse.data.routes[0].legs[0].start_location,
            destination: routeResponse.data.routes[0].legs[0].end_location,
            distance,
            duration,
            options: drivers,
            routeResponse: routeResponse.data,
        });
    } catch (error) {
        res.status(500).json({ error_code: "API_ERROR", error_description: "Erro na integração com Google Maps" });
    }
};

// Confirmar viagem
export const confirmRide = (req: Request, res: Response) => {
    const { customer_id, origin, destination, distance, driver } = req.body;

    if (!customer_id || !origin || !destination || !driver || origin === destination) {
        return res.status(400).json({ error_code: "INVALID_DATA", error_description: "Dados inválidos" });
    }

    res.json({ success: true });
};

// Histórico de viagens
export const getRideHistory = (req: Request, res: Response) => {
    res.json({
        customer_id: req.params.customer_id,
        rides: [],
    });
};
