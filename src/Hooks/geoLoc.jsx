import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useGeoLoc() {
    const [loc, setLoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            setLoc(response.data)
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(`https://ipinfo.io?token=4048b65d0c3731`)
        // fetchData('/example.json')
    }, []);

    return { loc, loading, error };

}