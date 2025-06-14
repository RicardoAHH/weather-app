import dataWeather from "../Hooks/dataWeather";
import HighlightCard from "./HighlightCard";
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { useState } from 'react';

export default function WeatherApp() {

    const [lat, setLat] = useState(19.43); // Default latitude for Mexico City
    const [lon, setLon] = useState(-99.13); // Default longitude for Mexico City
    const { data, loading, error } = dataWeather()
    const [direction, setDirection] = useState('N'); // Default direction
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-700">Cargando datos del clima...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-red-100 border border-red-400 text-red-700 p-4">
                <p className="text-lg">Error al cargar los datos del clima: {error.message}</p>
            </div>
        );
    }
    console.log(data[0].wind?.deg);
    const degrees = data[0].wind?.deg
    console.log(degrees)


    return (
        <div className="flex flex-col md:flex-row w-full  bg-[#100E1D]">
            {/* Panel Izquierdo */}
            <div className="w-full  md:w-1/3 bg-[#1E213A]  p-6 flex flex-col items-center justify-between relative">
                <LeftPanel
                    temperature={data[0].main?.temp} // Convert from Kelvin to Celsius
                    weather={data[0].weather[0]?.description}
                    ubication={data[0].name}
                />
            </div>

            {/* Panel Derecho */}
            <div className="w-full md:w-2/3 bg-[#100E1D] p-6 relative">
                <RightPanel
                    windSpeed={data[0].wind?.speed}
                    humidity={data[0].main?.humidity}
                    visibility={data[0].visibility}
                    pressure={data[0].main?.pressure}
                    degrees={data[0].wind?.deg} // Pasar la dirección del viento
                />
            </div>
            {/* <div className="hidden"><HighlightCard
                degrees={data[0].wind?.deg}
            /></div> */}
        </div>
    );
}

