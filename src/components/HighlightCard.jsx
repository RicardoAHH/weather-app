import React from 'react';

export default function HighlightCard({ degrees, title, value, unit, direction, progressBarValue }) {
    const isHumidity = title === 'Humidity';
    console.log(degrees)
    return (
        <div className="bg-[#1E213A] p-6 flex flex-col items-center justify-center text-white text-center rounded-lg shadow-md">
            <h3 className="text-base mb-4">{title}</h3>
            <div className="text-5xl font-bold mb-4">
                {value}<span className="text-2xl font-normal">{unit}</span>
            </div>

            {direction && (
                <div className="flex items-center text-sm text-[#A09FB1] mt-5">
                    <div className="w-6 h-6 bg-[#6E707A] rounded-full flex items-center justify-center mr-2">
                        <img src="/navigation.svg" alt="navigation" className='w-[15px]' style={{ transform: `rotate(${degrees}deg)` }} />
                    </div>
                    {direction}
                </div>
            )}

            {isHumidity && (
                <div className="w-full px-2 mt-2">
                    <div className="flex justify-between text-xs text-[#A09FB1] mb-1">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className="w-full bg-[#E7E7EB] h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-[#FFEC65] h-full rounded-full"
                            style={{ width: `${progressBarValue}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-end text-xs text-[#A09FB1] mt-1">
                        <span>%</span>
                    </div>
                </div>
            )}
        </div>
    );
}