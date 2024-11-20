// Routes
import Home from '../pages/home';
import Mundiales from '../pages/mundiales';
import Test from '../pages/test';

// Mundiales
import URU_1930 from '../pages/mundiales/1930-Uruguay';
import ITA_1934 from '../pages/mundiales/1934-Italia';
import FRA_1938 from '../pages/mundiales/1938-Francia';
import BRA_1950 from '../pages/mundiales/1950-Brasil';
import SUI_1954 from '../pages/mundiales/1954-Suiza';
import SWE_1958 from '../pages/mundiales/1958-Suecia';
import CHI_1962 from '../pages/mundiales/1962-Chile';
import ENG_1966 from '../pages/mundiales/1966-Inglaterra';
import MEX_1970 from '../pages/mundiales/1970-México';
import GER_1974 from '../pages/mundiales/1974-Alemania';
import ARG_1978 from '../pages/mundiales/1978-Argentina';
import ESP_1982 from '../pages/mundiales/1982-España';
import MEX_1986 from '../pages/mundiales/1986-México';
import ITA_1990 from '../pages/mundiales/1990-Italia';
import USA_1994 from '../pages/mundiales/1994-Estados-Unidos';
import FRA_1998 from '../pages/mundiales/1998-Francia';
import KOR_JAP_2002 from '../pages/mundiales/2002-Corea-Japon';
import GER_2006 from '../pages/mundiales/2006-Alemania';
import SUD_2010 from '../pages/mundiales/2010-Sudafrica';
import BRA_2014 from '../pages/mundiales/2014-Brasil';
import RUS_2018 from '../pages/mundiales/2018-Rusia';
import QAT_2022 from '../pages/mundiales/2022-Catar';

// Const
const routesConfig = [
    { path: '/', name: 'Inicio', element: <Home /> },
    { path: '/mundiales', name: 'Mundiales', element: <Mundiales /> },
    { path: '/test', name: 'Test', element: <Test /> },
    {
        path: '/mundiales/mundial/1930',
        name: 'Uruguay - 1930',
        element: <URU_1930 />,
    },
    {
        path: '/mundiales/mundial/1934',
        name: 'Italia - 1934',
        element: <ITA_1934 />,
    },
    {
        path: '/mundiales/mundial/1938',
        name: 'Francia - 1938',
        element: <FRA_1938 />,
    },
    {
        path: '/mundiales/mundial/1950',
        name: 'Brasil - 1950',
        element: <BRA_1950 />,
    },
    {
        path: '/mundiales/mundial/1954',
        name: 'Suiza - 1954',
        element: <SUI_1954 />,
    },
    {
        path: '/mundiales/mundial/1958',
        name: 'Suecia - 1958',
        element: <SWE_1958 />,
    },
    {
        path: '/mundiales/mundial/1962',
        name: 'Chile - 1962',
        element: <CHI_1962 />,
    },
    {
        path: '/mundiales/mundial/1966',
        name: 'Inglaterra - 1966',
        element: <ENG_1966 />,
    },
    {
        path: '/mundiales/mundial/1970',
        name: 'México - 1970',
        element: <MEX_1970 />,
    },
    {
        path: '/mundiales/mundial/1974',
        name: 'Alemania - 1974',
        element: <GER_1974 />,
    },
    {
        path: '/mundiales/mundial/1978',
        name: 'Argentina - 1978',
        element: <ARG_1978 />,
    },
    {
        path: '/mundiales/mundial/1982',
        name: 'España - 1982',
        element: <ESP_1982 />,
    },
    {
        path: '/mundiales/mundial/1986',
        name: 'México - 1986',
        element: <MEX_1986 />,
    },
    {
        path: '/mundiales/mundial/1990',
        name: 'Italia - 1990',
        element: <ITA_1990 />,
    },
    {
        path: '/mundiales/mundial/1994',
        name: 'Estados Unidos - 1994',
        element: <USA_1994 />,
    },
    {
        path: '/mundiales/mundial/1998',
        name: 'Francia - 1998',
        element: <FRA_1998 />,
    },
    {
        path: '/mundiales/mundial/2002',
        name: 'Corea / Japón - 2002',
        element: <KOR_JAP_2002 />,
    },
    {
        path: '/mundiales/mundial/2006',
        name: 'Alemania - 2006',
        element: <GER_2006 />,
    },
    {
        path: '/mundiales/mundial/2010',
        name: 'Sudafrica - 2010',
        element: <SUD_2010 />,
    },
    {
        path: '/mundiales/mundial/2014',
        name: 'Brasil - 2014',
        element: <BRA_2014 />,
    },
    {
        path: '/mundiales/mundial/2018',
        name: 'Rusia - 2018',
        element: <RUS_2018 />,
    },
    {
        path: '/mundiales/mundial/2022',
        name: 'Catar - 2022',
        element: <QAT_2022 />,
    },
];
