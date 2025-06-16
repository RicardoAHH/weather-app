import { useState, useEffect } from 'react';
import axios from 'axios';
const WEATHER_FIRST_KEY = import.meta.env.VITE_WEATHER_FIRST_KEY;

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
        fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_FIRST_KEY}`)
        // fetchData('/example.json')
    }, [lat, lon]);

    return { data, loading, error };

}
