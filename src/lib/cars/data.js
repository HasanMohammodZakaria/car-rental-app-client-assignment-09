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