import dataWeather from "../Hooks/dataWeather";
import useDataWeatherFive from "../Hooks/dataWeatherFive";
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { useEffect, useState } from 'react';

export default function WeatherApp() {

    const [lat, setLat] = useState("19.36"); // Default latitude for Huix
    const [lon, setLon] = useState("-99.35"); // Default longitude for Huix
    const { data, loading, error } = dataWeather(lat, lon)
    const [isMetric, setIsMetric] = useState(true);
    const apiUnits = isMetric ? 'metric' : 'imperial';
    const { datas, loading: loadingFive, error: errorFive } = useDataWeatherFive(lat, lon, apiUnits);

    const [kelvinTemperature, setKelvinTemperature] = useState(null);
    const [originalWindSpeed, setOriginalWindSpeed] = useState(null);
    const [originalVisibility, setOriginalVisibility] = useState(null);

    useEffect(() => {
        if (data && data.main && data.main.temp !== undefined) {
            setKelvinTemperature(data.main.temp);
        }
        if (data && data.wind && data.wind.speed !== undefined) {
            setOriginalWindSpeed(data.wind.speed);
        }
        if (data && data.visibility !== undefined) {
            setOriginalVisibility(data.visibility);
        }
    }, [data?.main?.temp, data?.wind?.speed, data?.visibility]);
    // conversiones de unidades metricas a imperiales 
    const celsiusTemperature = kelvinTemperature !== null ? (kelvinTemperature - 273.15).toFixed(1) : null;
    const fahrenheitTemperature = kelvinTemperature !== null ? ((kelvinTemperature - 273.15) * 9 / 5 + 32).toFixed(1) : null;

    const windSpeedMs = originalWindSpeed !== null ? originalWindSpeed.toFixed(2) : null;
    const windSpeedMph = originalWindSpeed !== null ? (originalWindSpeed * 2.23694).toFixed(2) : null;

    const visibilityKm = originalVisibility !== null ? (originalVisibility / 1000).toFixed(2) : null;
    const visibilityMiles = originalVisibility !== null ? (originalVisibility * 0.000621371).toFixed(2) : null;


    if (loading || loadingFive) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-700">Cargando datos del clima...</p>
            </div>
        );
    }
    if (error || errorFive) {
        return (
            <div className="flex justify-center items-center h-screen bg-red-100 border border-red-400 text-red-700 p-4">
                <p className="text-lg">Error al cargar los datos del clima: {error.message}</p>
            </div>
        );
    }


    let icons = [datas.list[6].weather[0].main, datas.list[14].weather[0].main, datas.list[22].weather[0].main, datas.list[30].weather[0].main, datas.list[38].weather[0].main]
    console.log(icons)
    let dia1 = []
    let dia2 = []
    let dia3 = []
    let dia4 = []
    let dia5 = []
    for (let index = 0; index <= 7; index++) {
        dia1.push((datas?.list[index]?.main?.temp).toFixed(1));
    }
    for (let index = 8; index <= 15; index++) {
        dia2.push((datas?.list[index]?.main?.temp).toFixed(1));
    }
    for (let index = 16; index <= 23; index++) {
        dia3.push((datas?.list[index]?.main?.temp).toFixed(1));
    }
    for (let index = 24; index <= 31; index++) {
        dia4.push((datas?.list[index]?.main?.temp).toFixed(1));
    }
    for (let index = 32; index <= 39; index++) {
        dia5.push((datas?.list[index]?.main?.temp).toFixed(1));
    }
    dia1.sort(function (a, b) {
        return a - b;
    });
    dia2.sort(function (a, b) {
        return a - b;
    });
    dia3.sort(function (a, b) {
        return a - b;
    });
    dia4.sort(function (a, b) {
        return a - b;
    });
    dia5.sort(function (a, b) {
        return a - b;
    });

    const minMax = {
        tempDia1: [dia1[0], dia1[7]],
        tempDia2: [dia2[0], dia2[7]],
        tempDia3: [dia3[0], dia3[7]],
        tempDia4: [dia4[0], dia4[7]],
        tempDia5: [dia5[0], dia5[7]],
    }

    console.log(minMax)


    const displayTemperature = isMetric ? celsiusTemperature : fahrenheitTemperature;
    const displayTempUnit = isMetric ? 'C' : 'F'; // Para LeftPanel
    const displayWindSpeed = isMetric ? windSpeedMs : windSpeedMph;
    const displayWindSpeedUnit = isMetric ? 'ms' : 'mph';
    const displayVisibility = isMetric ? visibilityKm : visibilityMiles;
    const displayVisibilityUnit = isMetric ? 'km' : 'miles';

    const toggleMetricUnit = (unitType) => {
        setIsMetric(unitType === 'metric');
    };


    return (
        <div className="flex flex-col md:flex-row w-full  bg-[#100E1D]">

            {/* Panel Izquierdo */}
            <div className="w-full  md:w-1/3 bg-[#1E213A]  p-6 flex flex-col items-center justify-between relative">
                <LeftPanel
                    temperature={displayTemperature}
                    unit={displayTempUnit}
                    weather={data.weather[0]?.description}
                    ubication={data.name}
                    setLat={setLat}
                    setLon={setLon}
                    icono={data.weather[0].main}
                />
            </div>
            <div className="flex flex-col md:w-2/3">
                {/* Temperature Toggle */}
                <div className="flex items-center justify-between mt-6 mr-10 gap-2">
                    <div name="darkmode" className="gap-5 ml-10 bg-gray-500 flex items-center justify-center p-2 rounded-full opacity-70 ">
                        <button>
                            <img src="/01d.png" alt="sun" className="w-[30px] opacity-50 hover:opacity-100 transition-opacity duration-200" />
                        </button>
                        <button>
                            <img src="/01n.png" alt="moon" className="w-[25px] opacity-50 hover:opacity-100 transition-opacity duration-200" />
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <button onClick={() => toggleMetricUnit('metric')} className="bg-[#ffffff] text-blue-950 w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-[#8F909A] transition-colors duration-200">
                            °C
                        </button>
                        <button onClick={() => toggleMetricUnit('imperial')} className="bg-[#585676] text-white w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-[#8F909A] transition-colors duration-200">
                            °F
                        </button>
                    </div>

                </div>
                {/* Panel Derecho */}
                <div className="w-full  bg-[#100E1D] relative">
                    <RightPanel
                        windSpeed={displayWindSpeed}
                        windSpeedUnit={displayWindSpeedUnit}
                        humidity={data.main?.humidity}
                        visibility={displayVisibility}
                        visibilityUnit={displayVisibilityUnit}
                        degrees={data.wind?.deg}
                        pressure={data.main?.pressure}
                        minMax={minMax}
                        unit={displayTempUnit}
                        icons={icons}
                    />
                </div>
            </div>

        </div>
    );
}

