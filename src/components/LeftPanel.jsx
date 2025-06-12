
export default function LeftPanel() {
    // Aquí irían los estados para la ciudad, temperatura, etc.
    // const [city, setCity] = useState('Santa Cruz de la Sierra');
    // const [temperature, setTemperature] = useState(26);
    // const [weatherDescription, setWeatherDescription] = useState('Broken Clouds');
    // const [date, setDate] = useState('Sun, 2 Jul');

    return (
        <>
            <div className="w-[120%]  absolute z-0 opacity-10 top-25">
                <img src="/Cloud-background.png" alt="cloud" />
            </div>

            <div className="w-full flex justify-around items-center mb-16 ">
                <button className="bg-[#6E707A] hover:bg-[#8F909A] text-white px-4 py-3 rounded shadow-md text-sm font-semibold transition-colors duration-200">
                    Search for Places
                </button>
                <button className="bg-[#6E707A] hover:bg-[#8F909A] text-white p-2 rounded-full shadow-md transition-colors duration-200">
                    <img src="/public/location.svg" alt="location" className="w-[30px]" />
                </button>
            </div>

            {/* Weather Icon */}
            <div className="mb-16">
                {/* Placeholder para el icono del clima. Puedes reemplazar con tu componente de icono. */}
                <div className="w-48 h-48 rounded-full flex items-center justify-center">
                    {/* Si tienes un componente para el icono de nubes: <CloudIcon className="w-36 h-36 text-white" /> */}
                    <img src="/public/04n.png" alt="cloud" className="" />
                </div>
            </div>

            {/* Temperatura */}
            <div className="text-white text-[100px] font-semibold mb-6">
                26<span className="text-[50px] text-gray-400 ">°C</span>
            </div>

            {/* Weather Description */}
            <div className="text-[#A09FB1] text-2xl mb-8 font-semibold">
                Broken Clouds
            </div>

            {/* Date and Location */}
            <div className="w-full text-center text-[#88869D] text-sm flex flex-col items-center mb-10 gap-5">
                <p className="mb-2">Today • Sun, 2 Jul</p>
                <div className="flex items-center">
                    {/* Icono de ubicación */}
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Santa Cruz de la Sierra</span>
                </div>
            </div>
        </>
    );
}