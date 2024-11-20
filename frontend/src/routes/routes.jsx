// Imports
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
const Home = lazy(() => import('../pages/mundiales/1930-Uruguay'));

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
function Loading() {
    return <div>Loadding...</div>;
}

function RoutesConfig() {
    return (
        <Suspense fellback={<Loading />}>
            <Routes>
                <Route path='Home' element={<Home />} />
            </Routes>
        </Suspense>
    )
}