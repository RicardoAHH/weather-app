import { useState, useEffect } from 'react';
import axios from 'axios';

export default function dataWeather(lat, lon) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            setData(response.data)
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=75fb36639c33f494bad6a773d6153cc7`)
        // fetchData('/example.json')
    }, [lat, lon]);

    return { data, loading, error };

}
