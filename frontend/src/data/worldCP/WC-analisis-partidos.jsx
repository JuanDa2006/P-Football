const crearInfo = (fecha, estadio) => ({
    fecha,
    estadio,
});

const crearGol = (nacion, jugador, minuto) => ({
    nacion,
    jugador,
    minuto,
});

const analisis_partidos_wc = [
    {
        id: '1930',
        partidos: [
            {
                partido: 'Partido 1 (Uruguay 1-0 Perú)',
                resumen:
                    'Rendimiento sólido pero conservador, lograron la victoria sin arriesgar demasiado.',

                goleadores: [crearGol('URU', 'Héctor Castro', 60)],
            },
            {
                partido: 'Partido 2 (Uruguay 4-0 Rumania)',
                resumen:
                    'Incremento en la agresividad ofensiva, gran eficacia en el ataque.',

                goleadores: [
                    crearGol('URU', 'Pablo Dorado', 7),
                    crearGol('URU', 'Héctor Scarone', 24),
                    crearGol('URU', 'Peregrino Anselmo', 30),
                    crearGol('URU', 'Pedro Cea ', 35),
                ],
            },
            {
                partido: 'Semifinal (Uruguay 6-1 Yugoslavia)',
                resumen:
                    'Dominio absoluto, tanto en control del juego como en definición.',

                goleadores: [
                    crearGol('YUG', 'Djordje Vujadinović', 4),
                    crearGol('URU', 'Pedro Cea', 18),
                    crearGol('URU', 'Peregrino Anselmo', 20),
                    crearGol('URU', 'Peregrino Anselmo', 31),
                    crearGol('URU', 'Santos Iriarte', 61),
                    crearGol('URU', 'Pedro Cea', 67),
                    crearGol('URU', 'Pedro Cea', 72),
                ],
            },
            {
                partido: 'Final (Uruguay 4-2 Argentina)',
                resumen:
                    'Superaron una desventaja inicial; gran capacidad de reacción y efectividad en ataque.',

                goleadores: [
                    crearGol('URU', 'Pablo Dorado', 12),
                    crearGol('ARG', 'Carlos Peucelle', 20),
                    crearGol('ARG', 'Guillermo Stábile', 37),
                    crearGol('URU', 'Pedro Cea', 57),
                    crearGol('URU', 'Santos Iriarte', 68),
                    crearGol('URU', 'Héctor Castro', 89),
                ],
            },
        ],
    },
    {
        id: '1934',
        partidos: [
            {
                partido: 'Octavos de final (Italia 7-1 Estados Unidos)',
                resumen:
                    'Dominio absoluto, mostró gran capacidad ofensiva desde el inicio.',

                goleadores: [
                    {
                        nacion: 'ITA',
                        jugador: 'Angelo Schiavio',
                        minuto: 18,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Raimundo Orsi',
                        minuto: 20,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Angelo Schiavio',
                        minuto: 29,
                    },
                    {
                        nacion: 'USA',
                        jugador: 'Aldo Donelli',
                        minuto: 57,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Giovanni Ferrari',
                        minuto: 63,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Angelo Schiavio',
                        minuto: 64,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Raimundo Orsi',
                        minuto: 69,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Giuseppe Meazza',
                        minuto: 90,
                    },
                ],
            },
            {
                partido: 'Cuartos de final (Italia 1-1 España)',
                resumen:
                    'Partido muy disputado; la defensa italiana fue clave.',

                goleadores: [
                    {
                        nacion: 'ESP',
                        jugador: 'Luis Pagola',
                        minuto: 30,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Giovanni Ferrari',
                        minuto: 44,
                    },
                ],
            },
            {
                partido: 'Cuartos de final - Desempate (Italia 1-0 España)',
                resumen: '',

                goleadores: [
                    {
                        nacion: 'ITA',
                        jugador: 'Giuseppe Meazza',
                        minuto: 11,
                    },
                ],
            },
            {
                partido: 'Semifinal (Italia 1-0 Austria)',
                resumen:
                    'Victoria ajustada, con un enfoque en defensa y aprovechamiento de una ocasión crucial.',

                goleadores: [
                    {
                        nacion: 'ITA',
                        jugador: 'Enrique Guaita',
                        minuto: 19,
                    },
                ],
            },
            {
                partido: 'Final (Italia 2-1 Checoslovaquia)',
                resumen:
                    'Remontada en tiempo extra; mostró carácter y resistencia',

                goleadores: [
                    {
                        nacion: 'CZE',
                        jugador: 'Antonín Puč',
                        minuto: 71,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Raimundo Orsi',
                        minuto: 81,
                    },
                    {
                        nacion: 'ITA',
                        jugador: 'Angelo Schiavio',
                        minuto: 95,
                    },
                ],
            },
        ],
    },
    {
        id: '1938',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1950',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1954',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1958',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1962',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1966',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1970',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1974',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1978',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1982',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1986',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1990',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1994',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '1998',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '2002',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '2006',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '2010',
        partidos: [
            {
                partido: 'Grupo (España 0-1 Suiza)',
                resumen:
                    'Inicio decepcionante, con problemas en la definición y defensa expuesta.',

                goleadores: [
                    {
                        nacion: 'SUI',
                        jugador: 'Gélson Fernandes',
                        minuto: 52,
                    },
                ],
            },
        ],
    },
    {
        id: '2014',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '2018',
        partidos: [
            {
                partido: '',
                resumen: '',

                goleadores: [],
            },
        ],
    },
    {
        id: '2022',
        partidos: [
            {
                partido: 'Grupo (Argentina 1-2 Arabia Saudita)',
                resumen: '',

                goleadores: [],
            },
            {
                partido: 'Grupo (Argentina 2-0 México)',
                resumen: '',

                goleadores: [],
            },
            {
                partido: 'Grupo (Argentina 2-0 Polonia)',
                resumen: '',

                goleadores: [],
            },
            {
                partido: 'Octavos de final (Argentina 2-1 Australia)',
                resumen: '',

                goleadores: [],
            },
            {
                partido:
                    'Cuartos de final (Argentina 4-3 Países Bajos, en penales)',
                resumen: '',

                goleadores: [],
            },
            {
                partido: 'Semifinal (Argentina 3-0 Croacia)',
                resumen: '',

                goleadores: [],
            },
            {
                partido: 'Final (Argentina 3-3 Francia, ganó en penales)',
                resumen: '',

                goleadores: [],
            },
        ],
    },
];

export default analisis_partidos_wc;
