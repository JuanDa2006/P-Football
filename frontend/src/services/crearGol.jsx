const crearGol = (nacion, jugador, minuto) => ({
    nacion,
    jugador,
    minuto,
    type: 'gol',
});

export default crearGol;
