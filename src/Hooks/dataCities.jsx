import { useState, useEffect } from 'react';

const useCitiesData = (jsonFilePath = '/cities.json') => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setLoading(true); // Iniciar la carga
                setError(null); // Limpiar errores anteriores

                // Hacer la petición al archivo JSON.
                // Si el archivo está en la carpeta 'public', puedes accederlo con una ruta relativa desde la raíz.
                const response = await fetch("/cities.json");

                if (!response.ok) { // Si la respuesta no es OK (ej. 404, 500)
                    throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
                }

                const data = await response.json(); // Parsear la respuesta como JSON
                setCities(data); // Establecer los datos de las ciudades

            } catch (err) {
                console.error("Error fetching cities data:", err);
                setError(err); // Capturar y establecer el error
            } finally {
                setLoading(false); // Finalizar la carga, independientemente del resultado
            }
        };

        fetchCities(); // Ejecutar la función de carga cuando el componente se monta
    }, [jsonFilePath]); // La dependencia asegura que se re-ejecute si la ruta del archivo cambia

    return { cities, loading, error };
};

export default useCitiesData;