import { useState } from "react";
import useCitiesData from "../Hooks/dataCities";
import useFechaActual from "../Hooks/useFechaActual";

export default function LeftPanel({ temperature, weather, ubication, setLat, setLon }) {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const { cities, loading, error } = useCitiesData('/cities.json');
    const [panel, setPanel] = useState(true)
    const celsiusTemperature = (temperature - 273.15).toFixed(1);
    const { fecha, diaSemana, mes } = useFechaActual()

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-700">Cargando ciudades...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-red-100 border border-red-400 text-red-700 p-4">
                <p className="text-lg">Error al cargar las ciudades: {error.message}</p>
            </div>
        );
    }

    function tooglePanel() {
        setPanel((state) => !state)
    }
    function handleSubmit(e) {
        e.preventDefault();
        const filtrado = cities.filter((city) => city.name.toLowerCase() === location.toLowerCase())
        setLat(filtrado[0].lat)
        setLon(filtrado[0].lon)
        setLocation('')
        tooglePanel()

    }
    const handleLocation = (e) => {
        e.preventDefault()
        const newValue = e.target.value
        setLocation(newValue)
    }


    return (
        <>
            <div name="panel2" className={`${panel ? "hidden" : "flex"} flex-col justify-center items-end w-[100%] gap-3`} >
                <button onClick={tooglePanel} className="w-[20px] text-white text-2xl">X</button>
                <div className="flex w-[100%] items-center justify-around">
                    <form onSubmit={handleSubmit} className="border-1 border-white flex" >
                        <img src="/search.svg" alt="search" className="w-[25px] mx-2" />
                        <input onChange={handleLocation} name="inputlocation" type="text" placeholder="search location" className="text-white p-1" />
                    </form>
                    <button onClick={handleSubmit} className="text-white font-semibold text-lg bg-[#3c47e9] px-3 py-1 rounded-sm">Search</button>
                </div>
            </div>
            <div name="panel1" className={`w-[100%] relative ${panel ? "flex" : "hidden"} flex-col items-center`}>

                <div className="w-[120%]  absolute z-0 opacity-10 top-25">
                    <img src="/Cloud-background.png" alt="cloud" />
                </div>

                <div className="w-full flex justify-around items-center mb-16 ">
                    <button onClick={tooglePanel} className="bg-[#6E707A] hover:bg-[#8F909A] text-white px-4 py-3 rounded shadow-md text-sm font-semibold transition-colors duration-200">
                        Search for Places
                    </button>
                    <button className="bg-[#6E707A] hover:bg-[#8F909A] text-white p-2 rounded-full shadow-md transition-colors duration-200">
                        <img src="/location.svg" alt="location" className="w-[30px]" />
                    </button>
                </div>

                {/* Icono del clima */}
                <div className="mb-16">
                    <div className="w-48 h-48 rounded-full flex items-center justify-center">
                        <img src="/public/04n.png" alt="cloud" className="" />
                    </div>
                </div>

                {/* Temperatura */}
                <div className="text-white text-[100px] font-semibold mb-6">
                    {celsiusTemperature}<span className="text-[50px] text-gray-400 ">°C</span>
                </div>

                {/* Descripcion del clima */}
                <div className="text-[#A09FB1] text-2xl mb-8 font-semibold">
                    {weather}
                </div>

                {/* Fecha y locacion */}
                <div className="w-full text-center text-[#88869D] text-sm flex flex-col items-center mb-10 gap-5">
                    <p className="mb-2">Today • {diaSemana}, {fecha} {mes}</p>
                    <div className="flex items-center">
                        {/* Icono de ubicación */}
                        <img src="/location_on.svg" alt="locationLogo" className="w-[20px]" />
                        <span>{ubication}</span>
                    </div>
                </div>
            </div>

        </>
    );
}