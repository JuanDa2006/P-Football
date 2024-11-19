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
import SUD_2010 from '../pages/mundiales/2010-Sudafrica';

import QAT_2022 from '../pages/mundiales/2022-Catar';

// Const
const routesConfig = [
    { path: '/', name: 'Inicio', element: <Home /> },
    { path: '/mundiales', name: 'Mundiales', element: <Mundiales /> },
    { path: '/test', name: 'Test', element: <Test /> },
    { path: '/mundiales/mundial/1930', name: 'Uruguay - 1930', element: <URU_1930 /> },
    { path: '/mundiales/mundial/1934', name: 'Italia - 1934', element: <ITA_1934 /> },
    { path: '/mundiales/mundial/1938', name: 'Francia - 1938', element: <FRA_1938 /> },
    { path: '/mundiales/mundial/1950', name: 'Brasil - 1950', element: <BRA_1950 /> },
    { path: '/mundiales/mundial/1954', name: 'Suiza - 1954', element: <SUI_1954 /> },
    { path: '/mundiales/mundial/1958', name: 'Suecia - 1958', element: <SWE_1958 /> },
    { path: '/mundiales/mundial/1962', name: 'Chile - 1962', element: <CHI_1962 /> },
    { path: '/mundiales/mundial/1966', name: 'Inglaterra - 1966', element: <ENG_1966 /> },
    { path: '/mundiales/mundial/1970', name: 'México - 1970', element: <MEX_1970 /> },
    { path: '/mundiales/mundial/1974', name: 'Alemania - 1974', element: <GER_1974 /> },

    { path: '/mundiales/mundial/2010', name: 'Sudafrica - 2010', element: <SUD_2010 /> },
    { path: '/mundiales/mundial/2022', name: 'Catar - 2022', element: <QAT_2022 /> }
];

export default routesConfig;