const crearEquipo = (
    nombre,
    puntos,
    partidosJugados,
    partidosGanados,
    partidosEmpatados,
    partidosPerdidos,
    golesFavor,
    golesContra
) => ({
    nombre,
    puntos,
    partidosJugados,
    partidosGanados,
    partidosEmpatados,
    partidosPerdidos,
    golesFavor,
    golesContra,
    diferenciaGoles: golesFavor - golesContra,
});

const resumen_wc = [
    {
        id: '1930',
        anfitriones: [
            {
                id: 'URU',
            },
        ],
        fechas: '13 al 30 de julio de 1930',
        estadios: '3 (principalmente el Estadio Centenario en Montevideo)',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: 'Fase de grupos y luego eliminación directa',
        puesto_1: {
            id: 'URU',
        },
        puesto_2: {
            id: 'ARG',
        },
        puesto_3: {
            id: 'USA',
        },
        puesto_4: {
            id: 'YUG',
        },
    },
    {
        id: '1934',
        anfitriones: [
            {
                id: 'ITA',
            },
        ],
        fechas: '27 de mayo al 10 de junio de 1934',
        estadios:
            '8 sedes en distintas ciudades (incluyendo Roma, Milán y Nápoles)',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: 'Eliminación directa desde octavos de final',
        puesto_1: {
            id: 'ITA',
        },
        puesto_2: {
            id: 'CZE',
        },
        puesto_3: {
            id: 'GER',
        },
        puesto_4: {
            id: 'AUT',
        },
    },
    {
        id: '1938',
        anfitriones: [
            {
                id: 'FRA',
            },
        ],
        fechas: '4 al 19 de junio de 1938',
        estadios: '10 sedes en varias ciudades, como París, Marsella y Burdeos',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: 'Eliminación directa desde octavos de final',
        puesto_1: {
            id: 'ITA',
        },
        puesto_2: {
            id: 'HUN',
        },
        puesto_3: {
            id: 'BRA',
        },
        puesto_4: {
            id: 'SWE',
        },
    },
    {
        id: '1950',
        anfitriones: [
            {
                id: 'BRA',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'URU',
        },
        puesto_2: {
            id: 'BRA',
        },
        puesto_3: {
            id: 'SWE',
        },
        puesto_4: {
            id: 'ESP',
        },
    },
    {
        id: '1954',
        anfitriones: [
            {
                id: 'SUI',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'GER',
        },
        puesto_2: {
            id: 'HUN',
        },
        puesto_3: {
            id: 'AUT',
        },
        puesto_4: {
            id: 'URU',
        },
    },
    {
        id: '1958',
        anfitriones: [
            {
                id: 'SWE',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'BRA',
        },
        puesto_2: {
            id: 'SWE',
        },
        puesto_3: {
            id: 'FRA',
        },
        puesto_4: {
            id: 'GER',
        },
    },
    {
        id: '1962',
        anfitriones: [
            {
                id: 'CHI',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'BRA',
        },
        puesto_2: {
            id: 'CZE',
        },
        puesto_3: {
            id: 'CHI',
        },
        puesto_4: {
            id: 'YUG',
        },
    },
    {
        id: '1966',
        anfitriones: [
            {
                id: 'ENG',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'ENG',
        },
        puesto_2: {
            id: 'GER',
        },
        puesto_3: {
            id: 'POR',
        },
        puesto_4: {
            id: 'URS',
        },
    },
    {
        id: '1970',
        anfitriones: [
            {
                id: 'MEX',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'BRA',
        },
        puesto_2: {
            id: 'ITA',
        },
        puesto_3: {
            id: 'GER',
        },
        puesto_4: {
            id: 'URU',
        },
    },
    {
        id: '1974',
        anfitriones: [
            {
                id: 'GER',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'GER',
        },
        puesto_2: {
            id: 'NED',
        },
        puesto_3: {
            id: 'POL',
        },
        puesto_4: {
            id: 'BRA',
        },
    },
    {
        id: '1978',
        anfitriones: [
            {
                id: 'ARG',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'ARG',
        },
        puesto_2: {
            id: 'NED',
        },
        puesto_3: {
            id: 'BRA',
        },
        puesto_4: {
            id: 'ITA',
        },
    },
    {
        id: '1982',
        anfitriones: [
            {
                id: 'ESP',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'ITA',
        },
        puesto_2: {
            id: 'GER',
        },
        puesto_3: {
            id: 'POL',
        },
        puesto_4: {
            id: 'FRA',
        },
    },
    {
        id: '1986',
        anfitriones: [
            {
                id: 'MEX',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'ARG',
        },
        puesto_2: {
            id: 'GER',
        },
        puesto_3: {
            id: 'FRA',
        },
        puesto_4: {
            id: 'BEL',
        },
    },
    {
        id: '1990',
        anfitriones: [
            {
                id: 'ITA',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'GER',
        },
        puesto_2: {
            id: 'ARG',
        },
        puesto_3: {
            id: 'ITA',
        },
        puesto_4: {
            id: 'ENG',
        },
    },
    {
        id: '1994',
        anfitriones: [
            {
                id: 'USA',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'BRA',
        },
        puesto_2: {
            id: 'ITA',
        },
        puesto_3: {
            id: 'SWE',
        },
        puesto_4: {
            id: 'BUL',
        },
    },
    {
        id: '1998',
        anfitriones: [
            {
                id: 'FRA',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'FRA',
        },
        puesto_2: {
            id: 'BRA',
        },
        puesto_3: {
            id: 'CRO',
        },
        puesto_4: {
            id: 'NED',
        },
    },
    {
        id: '2002',
        anfitriones: [
            {
                id: 'KOR',
            },
            {
                id: 'JPN',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'BRA',
        },
        puesto_2: {
            id: 'GER',
        },
        puesto_3: {
            id: 'TUR',
        },
        puesto_4: {
            id: 'KOR',
        },
    },
    {
        id: '2006',
        anfitriones: [
            {
                id: 'GER',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'ITA',
        },
        puesto_2: {
            id: 'FRA',
        },
        puesto_3: {
            id: 'GER',
        },
        puesto_4: {
            id: 'POR',
        },
    },
    {
        id: '2010',
        anfitriones: [
            {
                id: 'RSA',
            },
        ],
        fechas: '11 de junio al 11 de julio de 2010',
        estadios:
            '10 sedes en ciudades como Johannesburgo, Ciudad del Cabo, Durban y Pretoria',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato:
            'Fase de grupos, octavos de final, cuartos de final, semifinales y final.',
        puesto_1: {
            id: 'ESP',
        },
        puesto_2: {
            id: 'NED',
        },
        puesto_3: {
            id: 'GER',
        },
        puesto_4: {
            id: 'URU',
        },
    },
    {
        id: '2014',
        anfitriones: [
            {
                id: 'BRA',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'GER',
        },
        puesto_2: {
            id: 'ARG',
        },
        puesto_3: {
            id: 'NED',
        },
        puesto_4: {
            id: 'BRA',
        },
    },
    {
        id: '2018',
        anfitriones: [
            {
                id: 'RUS',
            },
        ],
        fechas: '',
        estadios: '',
        selecciones: [
            {
                grupo: '',
                paises: [crearEquipo()],
            },
        ],
        formato: '',
        puesto_1: {
            id: 'FRA',
        },
        puesto_2: {
            id: 'CRO',
        },
        puesto_3: {
            id: 'BEL',
        },
        puesto_4: {
            id: 'ENG',
        },
    },
    {
        id: '2022',
        anfitriones: [
            {
                id: 'QAT',
            },
        ],
        fechas: '20 de noviembre al 18 de diciembre de 2022',
        estadios:
            '8 sedes en ciudades como Doha, Al Rayyan, Al Wakrah y Lusail',
        selecciones: [
            {
                grupo: 'A',
                paises: [
                    crearEquipo('NED', 7, 3, 2, 1, 0, 5, 1),
                    crearEquipo('SEN', 6, 3, 2, 0, 1, 5, 4),
                    crearEquipo('ECU', 4, 3, 1, 1, 1, 4, 3),
                    crearEquipo('QAT', 0, 3, 0, 0, 3, 1, 7),
                ],
            },
            {
                grupo: 'B',
                paises: [
                    crearEquipo('ENG', 7, 3, 2, 1, 0, 9, 2),
                    crearEquipo('USA', 5, 3, 1, 2, 0, 2, 1),
                    crearEquipo('IRN', 3, 3, 1, 0, 2, 4, 7),
                    crearEquipo('WAL', 1, 3, 0, 1, 2, 1, 6),
                ]
            }
        ],
        formato:
            'Fase de grupos, octavos de final, cuartos de final, semifinales y final.',
        puesto_1: {
            id: 'ARG',
        },
        puesto_2: {
            id: 'FRA',
        },
        puesto_3: {
            id: 'CRO',
        },
        puesto_4: {
            id: 'MAR',
        },
    },
];

export default resumen_wc;
