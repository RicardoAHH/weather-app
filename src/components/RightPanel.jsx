import WeatherCard from './WeatherCard';
import HighlightCard from './HighlightCard';
import { useEffect, useState } from 'react';
import useFechasProximosDias from '../Hooks/useFechasProximosDias';

export default function RightPanel({ windSpeed, humidity, visibility, pressure, degrees, windSpeedUnit, visibilityUnit, minMax, unit, icons }) {
    const dias = useFechasProximosDias();
    const [icon1, setIcon1] = useState("/02d.png")
    const [icon2, setIcon2] = useState("/02d.png")
    const [icon3, setIcon3] = useState("/02d.png")
    const [icon4, setIcon4] = useState("/02d.png")
    const [icon5, setIcon5] = useState("/02d.png")
    useEffect(() => {
        for (let i = 1; i <= 5; i++) {
            if (icons[i] === "Rain") {
                setIcon1("/10d.png")
                setIcon2("/10d.png")
                setIcon3("/10d.png")
                setIcon4("/10d.png")
                setIcon5("/10d.png")
            } else if (icons[0] === "Thunderstorm") {
                setIcon1("/11d.png")
                setIcon2("/11d.png")
                setIcon3("/11d.png")
                setIcon4("/11d.png")
                setIcon5("/11d.png")
            } else if (icons[0] === "Drizzle") {
                setIcon1("/09d.png")
                setIcon2("/09d.png")
                setIcon3("/09d.png")
                setIcon4("/09d.png")
                setIcon5("/09d.png")
            } else if (icons[0] === "Snow") {
                setIcon1("/13d.png")
                setIcon2("/13d.png")
                setIcon3("/13d.png")
                setIcon4("/13d.png")
                setIcon5("/13d.png")
            } else if (icons[0] === "Atmosphere") {
                setIcon1("/50d.png")
                setIcon2("/50d.png")
                setIcon3("/50d.png")
                setIcon4("/50d.png")
                setIcon5("/50d.png")
            } else if (icons[0] === "Clear") {
                setIcon1("/01d.png")
                setIcon2("/01d.png")
                setIcon3("/01d.png")
                setIcon4("/01d.png")
                setIcon5("/01d.png")
            } else if (icons[0] === "Clouds") {
                setIcon1("/02d.png")
                setIcon2("/02d.png")
                setIcon3("/02d.png")
                setIcon4("/02d.png")
                setIcon5("/02d.png")
            }

        }

    })
    const forecastData = [
        { day: 'Tomorrow', tempMax: `${minMax.tempDia1[1]}`, tempMin: minMax.tempDia1[0], icon: icon1 }, // Usarás tus propios iconos
        { day: `${dias[2].diaSemana},${dias[2].fecha} ${dias[2].mes}`, tempMax: minMax.tempDia2[1], tempMin: minMax.tempDia2[0], icon: icon2 },
        { day: `${dias[3].diaSemana},${dias[3].fecha} ${dias[3].mes}`, tempMax: minMax.tempDia3[1], tempMin: minMax.tempDia3[0], icon: icon3 },
        { day: `${dias[4].diaSemana},${dias[4].fecha} ${dias[4].mes}`, tempMax: minMax.tempDia4[1], tempMin: minMax.tempDia4[0], icon: icon4 },
        { day: `${dias[5].diaSemana},${dias[5].fecha} ${dias[5].mes}`, tempMax: minMax.tempDia5[1], tempMin: minMax.tempDia5[0], icon: icon5 },
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