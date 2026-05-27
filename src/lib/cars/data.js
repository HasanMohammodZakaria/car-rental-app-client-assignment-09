import { authClient } from "@/lib/auth-client";


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



export const fetchAvailableCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available-cars`)
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
};

export const fetchAddCar = async (carData) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(carData)
    })
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
}

export const fetchBooking = async (bookingData) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData)
    })


    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
}


export const fetchMyAddedCars = async (userId) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-added-cars/${userId}`, {
        cache: "no-store",
        headers: {
            'authorization': `Bearer ${token}`
        },
    })
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data
}

export const fetchUpdateCar = async (id, updatedCar) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {

        method: "PATCH",
        headers: {
            'content-type': 'application/json',

            'authorization': `Bearer ${token}`


        },
        body: JSON.stringify(updatedCar),
    })
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data
}

export const fetchDeleteMyCar = async (id) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
        },
    })
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data
}


export const fetchDeleteMyBooking = async (id) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
    })
    if (!res.ok) throw new Error('Failed to fetch booking');
    const data = await res.json();
    return data
}
