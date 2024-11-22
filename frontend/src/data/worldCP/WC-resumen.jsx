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
        grupos: '/mundiales/1930/grupos',
        selecciones: [
            {
                grupo: '1',
                paises: [
                    crearEquipo('ARG', 6, 3, 3, 0, 0, 10, 4, true),
                    crearEquipo('CHI', 4, 3, 2, 0, 1, 5, 3),
                    crearEquipo('FRA', 2, 3, 1, 0, 2, 4, 3),
                    crearEquipo('MEX', 0, 3, 0, 0, 3, 4, 13),
                ],
            },
            {
                grupo: '2',
                paises: [
                    crearEquipo('YUG', 4, 2, 2, 0, 0, 6, 1, true),
                    crearEquipo('BRA', 2, 2, 1, 0, 1, 5, 2),
                    crearEquipo('BOL', 0, 2, 0, 0, 2, 0, 8),
                ],
            },
            {
                grupo: '3',
                paises: [
                    crearEquipo('URU', 4, 2, 2, 0, 0, 5, 0, true),
                    crearEquipo('ROU', 2, 2, 1, 1, 1, 3, 5),
                    crearEquipo('PER', 0, 2, 0, 2, 2, 1, 4),
                ],
            },
            {
                grupo: '4,',
                paises: [
                    crearEquipo('USA', 4, 2, 2, 0, 0, 6, 0, true),
                    crearEquipo('PAR', 2, 2, 1, 0, 1, 1, 3),
                    crearEquipo('BEL', 0, 2, 0, 0, 2, 0, 4),
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
        grupos: '/mundiales/1934/grupos',
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
        grupos: '/mundiales/1938/grupos',
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
        grupos: '/mundiales/1950/grupos',
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
        grupos: '/mundiales/1954/grupos',
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
        grupos: '/mundiales/1958/grupos',
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
        grupos: '/mundiales/1962/grupos',
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
        grupos: '/mundiales/1966/grupos',
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
        grupos: '/mundiales/1970/grupos',
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
        grupos: '/mundiales/1974/grupos',
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
        grupos: '/mundiales/1978/grupos',
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
        grupos: '/mundiales/1982/grupos',
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
        grupos: '/mundiales/1986/grupos',
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
        grupos: '/mundiales/1990/grupos',
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
        grupos: '/mundiales/1994/grupos',
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
        grupos: '/mundiales/1998/grupos',
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
        grupos: '/mundiales/2002/grupos',
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
        grupos: '/mundiales/2006/grupos',
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
        grupos: '/mundiales/2010/grupos',
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
        grupos: '/mundiales/2014/grupos',
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
        grupos: '/mundiales/2018/grupos',
        selecciones: [
            {
                grupo: 'A',
                paises: [
                    crearEquipo('URU', 9, 3, 3, 0, 0, 5, 0, true),
                    crearEquipo('RUS', 6, 3, 2, 0, 1, 8, 4, true),
                    crearEquipo('RSA', 3, 3, 1, 0, 2, 2, 7),
                    crearEquipo('EGY', 0, 3, 0, 0, 3, 2, 6),
                ],
            },
            {
                grupo: 'B',
                paises: [
                    crearEquipo('ESP', 5, 3, 1, 2, 0, 6, 5, true),
                    crearEquipo('POR', 5, 3, 1, 2, 0, 5, 4, true),
                    crearEquipo('IRN', 4, 3, 1, 1, 1, 2, 2),
                    crearEquipo('MAR', 1, 3, 0, 1, 2, 2, 4),
                ],
            },
            {
                grupo: 'C',
                paises: [
                    crearEquipo('FRA', 7, 3, 2, 1, 0, 3, 1, true),
                    crearEquipo('DEN', 5, 3, 1, 2, 0, 2, 1, true),
                    crearEquipo('PER', 3, 3, 1, 0, 2, 2, 2),
                    crearEquipo('AUS', 1, 3, 0, 1, 2, 2, 5),
                ],
            },
            {
                grupo: 'D',
                paises: [
                    crearEquipo('CRO', 9, 3, 3, 0, 0, 7, 1, true),
                    crearEquipo('ARG', 4, 3, 1, 1, 1, 3, 5, true),
                    crearEquipo('NGA', 3, 3, 1, 0, 2, 3, 4),
                    crearEquipo('ISL', 1, 3, 0, 1, 2, 2, 5),
                ],
            },
            {
                grupo: 'E',
                paises: [
                    crearEquipo('BRA', 7, 3, 2, 1, 0, 5, 1, true),
                    crearEquipo('SUI', 5, 3, 1, 2, 0, 5, 4, true),
                    crearEquipo('SRB', 3, 3, 1, 0, 2, 2, 4),
                    crearEquipo('CRC', 1, 3, 0, 1, 2, 2, 5),
                ],
            },
            {
                grupo: 'F',
                paises: [
                    crearEquipo('SWE', 6, 3, 2, 0, 1, 5, 2, true),
                    crearEquipo('MEX', 6, 3, 2, 0, 1, 3, 4, true),
                    crearEquipo('KOR', 3, 3, 1, 0, 2, 3, 3),
                    crearEquipo('GER', 3, 3, 1, 0, 2, 2, 4),
                ],
            },
            {
                grupo: 'G',
                paises: [
                    crearEquipo('BEL', 9, 3, 3, 0, 0, 9, 2, true),
                    crearEquipo('ENG', 6, 3, 2, 0, 1, 8, 3, true),
                    crearEquipo('TUN', 3, 3, 1, 0, 2, 5, 8),
                    crearEquipo('PAN', 0, 3, 0, 0, 3, 2, 11),
                ],
            },
            {
                grupo: 'H',
                paises: [
                    crearEquipo('COL', 6, 3, 2, 0, 1, 5, 2, true),
                    crearEquipo('JPN', 4, 3, 1, 1, 1, 4, 4, true),
                    crearEquipo('SEN', 4, 3, 1, 1, 1, 4, 4),
                    crearEquipo('POL', 3, 3, 1, 0, 2, 2, 5),
                ],
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
        grupos: '/mundiales/2022/grupos',
        selecciones: [
            {
                grupo: 'A',
                paises: [
                    crearEquipo('NED', 7, 3, 2, 1, 0, 5, 1, true),
                    crearEquipo('SEN', 6, 3, 2, 0, 1, 5, 4, true),
                    crearEquipo('ECU', 4, 3, 1, 1, 1, 4, 3),
                    crearEquipo('QAT', 0, 3, 0, 0, 3, 1, 7),
                ],
            },
            {
                grupo: 'B',
                paises: [
                    crearEquipo('ENG', 7, 3, 2, 1, 0, 9, 2, true),
                    crearEquipo('USA', 5, 3, 1, 2, 0, 2, 1, true),
                    crearEquipo('IRN', 3, 3, 1, 0, 2, 4, 7),
                    crearEquipo('WAL', 1, 3, 0, 1, 2, 1, 6),
                ],
            },
            {
                grupo: 'C',
                paises: [
                    crearEquipo('ARG', 6, 3, 2, 0, 1, 5, 2, true),
                    crearEquipo('POL', 4, 3, 1, 1, 1, 2, 2, true),
                    crearEquipo('MEX', 4, 3, 1, 1, 1, 2, 3),
                    crearEquipo('KSA', 3, 3, 1, 0, 2, 3, 5),
                ],
            },
            {
                grupo: 'D',
                paises: [
                    crearEquipo('FRA', 6, 3, 2, 0, 1, 6, 3, true),
                    crearEquipo('AUS', 6, 3, 2, 0, 1, 3, 4, true),
                    crearEquipo('TUN', 4, 3, 1, 1, 1, 1, 1),
                    crearEquipo('DEN', 1, 3, 0, 1, 2, 1, 3),
                ],
            },
            {
                grupo: 'E',
                paises: [
                    crearEquipo('JPN', 6, 3, 2, 0, 1, 4, 3, true),
                    crearEquipo('ESP', 4, 3, 1, 1, 1, 9, 3, true),
                    crearEquipo('GER', 4, 3, 1, 1, 1, 6, 5),
                    crearEquipo('CRC', 3, 3, 1, 0, 2, 3, 11),
                ],
            },
            {
                grupo: 'F',
                paises: [
                    crearEquipo('MAR', 7, 3, 2, 1, 0, 4, 1, true),
                    crearEquipo('CRO', 5, 3, 1, 2, 0, 4, 1, true),
                    crearEquipo('BEL', 4, 3, 1, 1, 1, 1, 2),
                    crearEquipo('CAN', 0, 3, 0, 0, 3, 2, 7),
                ],
            },
            {
                grupo: 'G',
                paises: [
                    crearEquipo('BRA', 6, 3, 2, 0, 1, 3, 1, true),
                    crearEquipo('SUI', 6, 3, 2, 0, 1, 4, 3, true),
                    crearEquipo('CMR', 4, 3, 1, 1, 1, 4, 4),
                    crearEquipo('SRB', 1, 3, 0, 1, 2, 5, 8),
                ],
            },
            {
                grupo: 'H',
                paises: [
                    crearEquipo('POR', 6, 3, 2, 0, 1, 6, 4, true),
                    crearEquipo('KOR', 4, 3, 1, 1, 1, 4, 4, true),
                    crearEquipo('URU', 4, 3, 1, 1, 1, 2, 2),
                    crearEquipo('GHA', 3, 3, 1, 0, 2, 5, 7),
                ],
            },
        ],
        formato:
            'Fase de grupos, octavos de final, cuartos de final, semifinales y final.',
        podio: crearPodio('ARG', 'FRA', 'CRO', 'MAR'),
    },
];

export default resumen_wc;
