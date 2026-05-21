export const fetchCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);
    const data = await res.json();
    return data || [];
};

export const fetchSingleCar = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`)
    const data = await res.json()
    return data || {}
};

export const fetchAvailableCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available-cars`)
    const data = await res.json()
    return data || [];
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
    return data || {}
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
    return data || {}
}

export const fetchUserBooking = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${userId}`)
    const data = res.json()
    return data || {}
}