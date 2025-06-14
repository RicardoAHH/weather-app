import { useState, useEffect } from 'react';

const useFechaActual = () => {
    const [currentDate, setCurrentDate] = useState(new Date());


    // Opciones de formato para Perú ('es-PE')
    const opcionesFecha = { day: 'numeric' };
    const opcionesDiaSemana = { weekday: 'short' };
    const opcionesMes = { month: 'short' };

    // Formatear los datos
    const fecha = currentDate.toLocaleDateString('en-PE', opcionesFecha);
    const diaSemana = currentDate.toLocaleDateString('en-PE', opcionesDiaSemana);
    const mes = currentDate.toLocaleDateString('en-PE', opcionesMes);

    return { fecha, diaSemana, mes };
};

export default useFechaActual;