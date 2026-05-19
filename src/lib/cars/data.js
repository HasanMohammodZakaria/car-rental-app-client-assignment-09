export const fetchCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);
    const data = await res.json();
    return data || [];
};