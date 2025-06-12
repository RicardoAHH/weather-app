
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function WeatherApp() {
    return (
        <div className="flex flex-col md:flex-row w-full  border-3 border-amber-200 bg-[#100E1D]">
            {/* Panel Izquierdo */}
            <div className="w-full  md:w-1/3 bg-[#1E213A] border-2 border-white p-6 flex flex-col items-center justify-between relative">
                <LeftPanel />
            </div>

            {/* Panel Derecho */}
            <div className="w-full md:w-2/3 bg-[#100E1D] p-6 relative">
                <RightPanel />
            </div>
        </div>
    );
}