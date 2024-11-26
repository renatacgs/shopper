export type Ride = {
    id: number;
    date: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driverName: string;
    value: number;
};

export type Driver = {
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
