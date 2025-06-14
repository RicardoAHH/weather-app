import WeatherCard from './WeatherCard';
import HighlightCard from './HighlightCard';
import { useEffect, useState } from 'react';

export default function RightPanel({ windSpeed, humidity, visibility, pressure, degrees }) {
    const forecastData = [
        { day: 'Tomorrow', tempC: 27, tempF: 81, icon: 'cloud' }, // Usarás tus propios iconos
        { day: 'Mon, 3 Jul', tempC: 27, tempF: 81, icon: 'cloud' },
        { day: 'Tue, 4 Jul', tempC: 28, tempF: 82, icon: 'cloud' },
        { day: 'Wed, 5 Jul', tempC: 29, tempF: 84, icon: 'cloud' },
        { day: 'Thu, 6 Jul', tempC: 31, tempF: 88, icon: 'cloud' },
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
                    {degrees !== undefined && (
                        <HighlightCard
                            title="Wind status"
                            value={windSpeed}
                            unit="ms"
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
                        unit="km"
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