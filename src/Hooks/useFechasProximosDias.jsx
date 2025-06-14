import { useState, useEffect } from 'react';

const useFechasProximosDias = () => {
    const [fechasDias, setFechasDias] = useState([]);

    useEffect(() => {
        const generarFechas = () => {
            const hoy = new Date();
            const diasGenerados = [];
            const opcionesFecha = { day: 'numeric' };
            const opcionesDiaSemana = { weekday: 'short' };
            const opcionesMes = { month: 'short' };

            for (let i = 0; i < 6; i++) {
                const fechaActual = new Date(hoy);
                fechaActual.setDate(hoy.getDate() + i);

                const fecha = fechaActual.toLocaleDateString('en-PE', opcionesFecha);
                const diaSemana = fechaActual.toLocaleDateString('en-PE', opcionesDiaSemana);
                const mes = fechaActual.toLocaleDateString('en-PE', opcionesMes);

                diasGenerados.push({
                    fecha,
                    diaSemana,
                    mes,
                });
            }
            setFechasDias(diasGenerados);
        };
        generarFechas();

    }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar

    return fechasDias;
};

export default useFechasProximosDias;