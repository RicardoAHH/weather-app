// src/components/RightPanel.jsx
import React from 'react';
import WeatherCard from './WeatherCard';
import HighlightCard from './HighlightCard';

export default function RightPanel() {
    const forecastData = [
        { day: 'Tomorrow', tempC: 27, tempF: 81, icon: 'cloud' }, // Usarás tus propios iconos
        { day: 'Mon, 3 Jul', tempC: 27, tempF: 81, icon: 'cloud' },
        { day: 'Tue, 4 Jul', tempC: 28, tempF: 82, icon: 'cloud' },
        { day: 'Wed, 5 Jul', tempC: 29, tempF: 84, icon: 'cloud' },
        { day: 'Thu, 6 Jul', tempC: 31, tempF: 88, icon: 'cloud' },
    ];

    return (
        <div className="text-white p-4">
            {/* Temperature Toggle */}
            <div className="flex justify-end mb-8 gap-2">
                <button className="bg-[#ffffff] text-blue-950 w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-[#8F909A] transition-colors duration-200">
                    °C
                </button>
                <button className="bg-[#585676] text-white w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-[#8F909A] transition-colors duration-200">
                    °F
                </button>
            </div>

            {/* 5-Day Forecast */}
            <div className='flex items-center justify-center'>
                <div className="w-[70%]  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                    {forecastData.map((day, index) => (
                        <WeatherCard key={index} data={day} />
                    ))}
                </div>
            </div>


            {/* Today's Highlights */}
            <div className='flex flex-col items-center justify-center'>
                <div className='w-[70%]'><h2 className="text-2xl font-bold mb-6">Today's Highlights</h2></div>

                <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <HighlightCard
                        title="Wind status"
                        value="5.39"
                        unit="ms"
                        direction="NW"
                        icon="wind" // Placeholder para tu icono de viento
                    />
                    <HighlightCard
                        title="Humidity"
                        value="51"
                        unit="%"
                        progressBarValue={51} // Valor para la barra de progreso de humedad
                    />
                    <HighlightCard
                        title="Visibility"
                        value="16093.40"
                        unit="km"
                    />
                    <HighlightCard
                        title="Air Pressure"
                        value="1008"
                        unit="mb"
                    />
                </div>
            </div>

        </div>
    );
}