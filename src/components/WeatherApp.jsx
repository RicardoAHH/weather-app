import dataWeather from "../Hooks/dataWeather";
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { useState } from 'react';

export default function WeatherApp() {

    const [lat, setLat] = useState("19.36"); // Default latitude for Huix
    const [lon, setLon] = useState("-99.35"); // Default longitude for Huix
    const { data, loading, error } = dataWeather(lat, lon)

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
    console.log(data)



    return (
        <div className="flex flex-col md:flex-row w-full  bg-[#100E1D]">
            {/* Panel Izquierdo */}
            <div className="w-full  md:w-1/3 bg-[#1E213A]  p-6 flex flex-col items-center justify-between relative">
                <LeftPanel
                    temperature={data.main?.temp}
                    weather={data.weather[0]?.description}
                    ubication={data.name}
                    setLat={setLat}
                    setLon={setLon}
                />
            </div>

            {/* Panel Derecho */}
            <div className="w-full md:w-2/3 bg-[#100E1D] p-6 relative">
                <RightPanel
                    windSpeed={data.wind?.speed}
                    humidity={data.main?.humidity}
                    visibility={data.visibility}
                    pressure={data.main?.pressure}
                    degrees={data.wind?.deg}
                />
            </div>
        </div>
    );
}

