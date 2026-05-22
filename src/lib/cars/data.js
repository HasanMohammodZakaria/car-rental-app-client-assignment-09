export const fetchCars = async (search = '', type = '') => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (type) params.append('type', type);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
};

export const fetchCarTypes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/types`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
}

export const fetchSingleCar = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data;
};

export const fetchAvailableCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available-cars`)
    const data = await res.json()
    return data;
};

export const fetchAddCar = async (carData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(carData)
    })
    const data = await res.json();
    return data;
}

export const fetchBooking = async (bookingData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    return data;
}

export const fetchUserBooking = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${userId}`)
    const data = res.json()
    return data;
}

