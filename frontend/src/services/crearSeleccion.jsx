const crearSeleccion = (
    nombre,
    puntos,
    partidosJugados,
    partidosGanados,
    partidosEmpatados,
    partidosPerdidos,
    golesFavor,
    golesContra,
    pasa
) => ({
    nombre,
    puntos,
    partidosJugados,
    partidosGanados,
    partidosEmpatados,
    partidosPerdidos,
    golesFavor,
    golesContra,
    pasa,
    diferenciaGoles: golesFavor - golesContra,
});

export default crearSeleccion;
