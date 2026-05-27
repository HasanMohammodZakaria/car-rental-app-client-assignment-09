import { headers } from "next/headers";
import { auth } from "../auth";

export const fetchSingleCar = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }

    })
    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
};

export const fetchUserBooking = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${userId}`, {
        headers: {
            'authorization': `Bearer ${token}`
        },
    })
    console.log('Status:', res.status);
    console.log('Token:', token);

    if (!res.ok) throw new Error('Failed to fetch cars');
    const data = await res.json();
    return data;
}