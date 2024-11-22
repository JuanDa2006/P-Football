const crearPodio = (puesto_1, puesto_2, puesto_3, puesto_4) => ({
    puesto_1,
    puesto_2,
    puesto_3,
    puesto_4,
});

const crearEquipo = (
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
                grupo: '1',
                paises: [
                    crearEquipo('ARG', 6, 3, 3, 0, 0, 10, 4, true),
                    crearEquipo('CHI', 4, 3, 2, 0, 1, 5, 3, false),
                    crearEquipo('FRA', 2, 3, 1, 0, 2, 4, 3, false),
                    crearEquipo('MEX', 0, 3, 0, 0, 3, 4, 13, false),
                ],
            },
            {
                grupo: '2',
                paises: [
                    crearEquipo('YUG', 4, 2, 2, 0, 0, 6, 1, true),
                    crearEquipo('BRA', 2, 2, 1, 0, 1, 5, 2, false),
                    crearEquipo('BOL', 0, 2, 0, 0, 2, 0, 8, false),
                ],
            },
            {
                grupo: '3',
                paises: [
                    crearEquipo('URU', 4, 2, 2, 0, 0, 5, 0, true),
                    crearEquipo('ROU', 2, 2, 1, 1, 1, 3, 5, false),
                    crearEquipo('PER', 0, 2, 0, 2, 2, 1, 4, false),
                ],
            },
            {
                grupo: '4,',
                paises: [
                    crearEquipo('USA', 4, 2, 2, 0, 0, 6, 0, true),
                    crearEquipo('PAR', 2, 2, 1, 0, 1, 1, 3, false),
                    crearEquipo('BEL', 0, 2, 0, 0, 2, 0, 4, false),
                ],
            },
        ],
        formato: 'Fase de grupos y luego eliminación directa',
        podio: crearPodio('URU', 'ARG', 'USA', 'YUG'),
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
        podio: crearPodio('ITA', 'CZE', 'GER', 'AUT'),
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
        podio: crearPodio('ITA', 'HUN', 'BRA', 'SWE'),
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
        podio: crearPodio('URU', 'BRA', 'SWE', 'ESP'),
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
        podio: crearPodio('GER', 'HUN', 'AUT', 'URU'),
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
        podio: crearPodio('BRA', 'SWE', 'FRA', 'GER'),
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
        podio: crearPodio('BRA', 'CZE', 'CHI', 'YUG'),
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
        podio: crearPodio('ENG', 'GER', 'POR', 'URS'),
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
        podio: crearPodio('BRA', 'ITA', 'GER', 'URU'),
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
        podio: crearPodio('GER', 'NED', 'POL', 'BRA'),
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
        podio: crearPodio('ARG', 'NED', 'BRA', 'ITA'),
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
        podio: crearPodio('ITA', 'GER', 'POL', 'FRA'),
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
        podio: crearPodio('ARG', 'GER', 'FRA', 'BEL'),
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
        podio: crearPodio('GER', 'ARG', 'ITA', 'ENG'),
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
        podio: crearPodio('BRA', 'ITA', 'SWE', 'BUL'),
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
        podio: crearPodio('FRA', 'BRA', 'CRO', 'NED'),
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
        podio: crearPodio('BRA', 'GER', 'TUR', 'KOR'),
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
        podio: crearPodio('ITA', 'FRA', 'GER', 'POR'),
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
        podio: crearPodio('ESP', 'NED', 'GER', 'URU'),
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
        podio: crearPodio('GER', 'ARG', 'NED', 'BRA'),
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
        podio: crearPodio('FRA', 'CRO', 'BEL', 'ENG'),
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
                    crearEquipo('NED', 7, 3, 2, 1, 0, 5, 1, true),
                    crearEquipo('SEN', 6, 3, 2, 0, 1, 5, 4, true),
                    crearEquipo('ECU', 4, 3, 1, 1, 1, 4, 3, false),
                    crearEquipo('QAT', 0, 3, 0, 0, 3, 1, 7, false),
                ],
            },
            {
                grupo: 'B',
                paises: [
                    crearEquipo('ENG', 7, 3, 2, 1, 0, 9, 2, true),
                    crearEquipo('USA', 5, 3, 1, 2, 0, 2, 1, true),
                    crearEquipo('IRN', 3, 3, 1, 0, 2, 4, 7, false),
                    crearEquipo('WAL', 1, 3, 0, 1, 2, 1, 6, false),
                ],
            },
            {
                grupo: 'C',
                paises: [
                    crearEquipo('ARG', 6, 3, 2, 0, 1, 5, 2, true),
                    crearEquipo('POL', 4, 3, 1, 1, 1, 2, 2, true),
                    crearEquipo('MEX', 4, 3, 1, 1, 1, 2, 3, false),
                    crearEquipo('KSA', 3, 3, 1, 0, 2, 3, 5, false)
                ]
            },
            {
                grupo: 'D',
                paises: [
                    crearEquipo('FRA', 6, 3, 2, 0, 1, 6, 3, true),
                    crearEquipo('AUS', 6, 3, 2, 0, 1, 3, 4, true),
                    crearEquipo('TUN', 4, 3, 1, 1, 1, 1, 1, false),
                    crearEquipo('DEN', 1, 3, 0, 1, 2, 1, 3, false)
                ]
            },
            {
                grupo: 'E',
                paises: [
                    crearEquipo('JPN', 6, 3, 2, 0, 1, 4, 3, true),
                    crearEquipo('ESP', 4, 3, 1, 1, 1, 9, 3, true),
                    crearEquipo('GER', 4, 3, 1, 1, 1, 6, 5, false),
                    crearEquipo('CRC', 3, 3, 1, 0, 2, 3, 11, false)
                ]
            },
            {
                grupo: 'F',
                paises: [
                    crearEquipo('MAR', 7, 3, 2, 1, 0, 4, 1, true),
                    crearEquipo('CRO', 5, 3, 1, 2, 0, 4, 1, true),
                    crearEquipo('BEL', 4, 3, 1, 1, 1, 1, 2, false),
                    crearEquipo('CAN', 0, 3, 0, 0, 3, 2, 7, false)
                ]
            },
            {
                grupo: 'G',
                paises: [
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, true),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, true),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, false),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, false)
                ]
            },
            {
                grupo: 'H',
                paises: [
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, true),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, true),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, false),
                    crearEquipo('', 0, 0, 0, 0, 0, 0, 0, false)
                ]
            },
        ],
        formato:
            'Fase de grupos, octavos de final, cuartos de final, semifinales y final.',
        podio: crearPodio('ARG', 'FRA', 'CRO', 'MAR'),
    },
];

export default resumen_wc;
