import WeatherCard from './WeatherCard';
import HighlightCard from './HighlightCard';
import { useEffect, useState } from 'react';
import useFechasProximosDias from '../Hooks/useFechasProximosDias';

export default function RightPanel({ windSpeed, humidity, visibility, pressure, degrees, windSpeedUnit, visibilityUnit, minMax, unit }) {
    const dias = useFechasProximosDias();
    const forecastData = [
        { day: 'Tomorrow', tempMax: `${minMax.tempDia1[1]}`, tempMin: minMax.tempDia1[0], icon: 'cloud' }, // Usarás tus propios iconos
        { day: `${dias[2].diaSemana},${dias[2].fecha} ${dias[2].mes}`, tempMax: minMax.tempDia2[1], tempMin: minMax.tempDia2[0], icon: 'cloud' },
        { day: `${dias[3].diaSemana},${dias[3].fecha} ${dias[3].mes}`, tempMax: minMax.tempDia3[1], tempMin: minMax.tempDia3[0], icon: 'cloud' },
        { day: `${dias[4].diaSemana},${dias[4].fecha} ${dias[4].mes}`, tempMax: minMax.tempDia4[1], tempMin: minMax.tempDia4[0], icon: 'cloud' },
        { day: `${dias[5].diaSemana},${dias[5].fecha} ${dias[5].mes}`, tempMax: minMax.tempDia5[1], tempMin: minMax.tempDia5[0], icon: 'cloud' },
    ];
    const [windDirection, setWindDirection] = useState("")
    console.log(degrees)
    // const grados = `${degrees}`
    useEffect(() => {
        if (degrees >= 0 && degrees <= 22.4) {
            setWindDirection("N")
        } else if (degrees >= 22.5 && degrees <= 67.4) {
            setWindDirection("NE")
        } else if (degrees >= 67.5 && degrees <= 112.4) {
            setWindDirection("E")
        } else if (degrees >= 112.5 && degrees <= 157.4) {
            setWindDirection("SE")
        } else if (degrees >= 157.5 && degrees <= 202.4) {
            setWindDirection("S")
        } else if (degrees >= 202.5 && degrees <= 247.4) {
            setWindDirection("SW")
        } else if (degrees >= 247.5 && degrees <= 292.4) {
            setWindDirection("W")
        } else if (degrees >= 292.5 && degrees <= 337.4) {
            setWindDirection("NW")
        } else if (degrees >= 337.5 && degrees <= 360) {
            setWindDirection("N")
        }
    }, [degrees])



    return (
        <div className="text-white p-4">


            {/* 5-Day Forecast */}
            <div className='flex items-center justify-center'>
                <div className="w-[70%]  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                    {forecastData.map((day, index) => (
                        <WeatherCard key={index} data={day} unit={unit} />
                    ))}
                </div>
            </div>


            {/* Today's Highlights */}
            <div className='flex flex-col items-center justify-center'>
                <div className='w-[70%]'><h2 className="text-2xl font-bold mb-6">Today's Highlights</h2></div>

                <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {degrees !== undefined && (
                        <HighlightCard
                            title="Wind status"
                            value={windSpeed}
                            unit={windSpeedUnit}
                            direction={windDirection}
                            degrees={degrees}
                        />
                    )}
                    <HighlightCard
                        title="Humidity"
                        value={humidity}
                        unit="%"
                        progressBarValue={humidity}
                    />
                    <HighlightCard
                        title="Visibility"
                        value={visibility}
                        unit={visibilityUnit}
                    />
                    <HighlightCard
                        title="Air Pressure"
                        value={pressure}
                        unit="mb"
                    />
                </div>
            </div>

        </div>
    );
}