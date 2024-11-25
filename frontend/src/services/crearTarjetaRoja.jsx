const crearTarjetaRoja = (nacion, jugador, minuto) => ({
    nacion,
    jugador,
    minuto,
    type: 'red_card',
});

export default crearTarjetaRoja;
