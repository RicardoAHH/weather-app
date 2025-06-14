// src/components/WeatherCard.jsx
import React from 'react';

export default function WeatherCard({ data }) {
    // Aquí puedes manejar la lógica para elegir el icono correcto basado en data.icon
    const WeatherIcon = () => (
        // Placeholder para tu componente de icono
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zM9 9a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
        </svg>
    );

    return (
        <div className="bg-[#1E213A] p-4 flex flex-col items-center justify-center text-white text-center rounded-lg shadow-md">
            <p className="text-md mb-2">{data.day}</p>
            <img src="/04n.png" alt="cloud" className='mr-5 mb-5 w-[60px]' />
            <div className="flex justify-center gap-5 mt-4">
                <span className="font-semibold">{data.tempC}°C</span>
                <span className="text-[#A09FB1] ml-2">{data.tempF}°F</span>
            </div>
        </div>
    );
}