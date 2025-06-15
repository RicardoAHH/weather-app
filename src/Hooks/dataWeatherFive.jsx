import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function useDataWeatherFive(lat, lon, units) {

    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (currentLat, currentLon, currentUnits) => {
        setLoading(true);
        setError(null);
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLon}&appid=709d0f91ef536a959cf2c1c7a7b06fed&units=${currentUnits}`;
            const response = await axios.get(url);
            setDatas(response.data);
        } catch (err) {
            setError(err);
            console.error("Error fetching 5-day weather data:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {

        if (lat && lon && units) {
            fetchData(lat, lon, units);
        }
    }, [lat, lon, units, fetchData]);

    return { datas, loading, error };
}
