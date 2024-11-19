const P = 'Posición';
const POR = 'Portero';
const DEF = 'Defensa';
const MC = 'Mediocampo';
const ATC = 'Ataque';

const analisis_partidos_wc = [
    {
        id: '1930',
        partidos: [
            {
                partido: 'Partido 1 (Uruguay 1-0 Perú)',
                resumen:
                    'Rendimiento sólido pero conservador, lograron la victoria sin arriesgar demasiado.',
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [
                    { nacion: 'URU', jugador: 'Héctor Castro', minuto: 60 },
                ],
            },
            {
                partido: 'Partido 2 (Uruguay 4-0 Rumania)',
                resumen:
                    'Incremento en la agresividad ofensiva, gran eficacia en el ataque.',
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [
                    {
                        nacion: 'URU',
                        jugador: 'Pablo Dorado',
                        minuto: 7,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Héctor Scarone',
                        minuto: 24,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Peregrino Anselmo',
                        minuto: 30,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Pedro Cea ',
                        minuto: 35,
                    },
                ],
            },
            {
                partido: 'Semifinal (Uruguay 6-1 Yugoslavia)',
                resumen:
                    'Dominio absoluto, tanto en control del juego como en definición.',
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [
                    {
                        nacion: 'YUG',
                        jugador: 'Djordje Vujadinović',
                        minuto: 4,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Pedro Cea',
                        minuto: 18,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Peregrino Anselmo',
                        minuto: 20,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Peregrino Anselmo',
                        minuto: 31,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Santos Iriarte',
                        minuto: 61,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Pedro Cea',
                        minuto: 67,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Pedro Cea',
                        minuto: 72,
                    },
                ],
            },
            {
                partido: 'Final (Uruguay 4-2 Argentina)',
                resumen:
                    'Superaron una desventaja inicial; gran capacidad de reacción y efectividad en ataque.',
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [
                    {
                        nacion: 'URU',
                        jugador: 'Pablo Dorado',
                        minuto: 12,
                    },
                    {
                        nacion: 'ARG',
                        jugador: 'Carlos Peucelle',
                        minuto: 20,
                    },
                    {
                        nacion: 'ARG',
                        jugador: 'Guillermo Stábile',
                        minuto: 37,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Pedro Cea',
                        minuto: 57,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Santos Iriarte',
                        minuto: 68,
                    },
                    {
                        nacion: 'URU',
                        jugador: 'Héctor Castro',
                        minuto: 89,
                    },
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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

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
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [],
            },
        ],
    },
    {
        id: '2022',
        partidos: [
            {
                partido: '',
                resumen: '',
                fecha: '',
                hora: '',
                alineacion: [
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                    { posicion: P, nombre: '' },
                ],
                cambios: [
                    {
                        sale: '',
                        entra: '',
                        minuto: 0,
                    },
                ],
                tarjetas_amarillas: [{ jugador: '', minuto: 0 }],
                tarjetas_roja: [{ jugador: '', minuto: 0 }],

                goleadores: [],
            },
        ],
    },
];

export default analisis_partidos_wc;
