import { useState, useEffect } from 'react';

const useCitiesData = (jsonFilePath = '/cities.json') => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setLoading(true);
                setError(null);


                const response = await fetch("/cities.json");

                if (!response.ok) {
                    throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setCities(data);

            } catch (err) {
                console.error("Error fetching cities data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, [jsonFilePath]);

    return { cities, loading, error };
};

export default useCitiesData;