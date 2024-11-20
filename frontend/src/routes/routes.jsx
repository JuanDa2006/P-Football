// Imports
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
const Home = lazy(() => import('../pages/home'));
const ErrorPage = lazy(() => import('../error/errorPage'));
const Test = lazy(() => import('../pages/test'));

// Mundiales
const Mundiales = lazy(() => import('../pages/mundiales'));
const URU_1930 = lazy(() => import('../pages/mundiales/1930-Uruguay'));
const ITA_1934 = lazy(() => import('../pages/mundiales/1934-Italia'));
const FRA_1938 = lazy(() => import('../pages/mundiales/1938-Francia'));
const BRA_1950 = lazy(() => import('../pages/mundiales/1950-Brasil'));
const SUI_1954 = lazy(() => import('../pages/mundiales/1954-Suiza'));
const SWE_1958 = lazy(() => import('../pages/mundiales/1958-Suecia'));
const CHI_1962 = lazy(() => import('../pages/mundiales/1962-Chile'));
const ENG_1966 = lazy(() => import('../pages/mundiales/1966-Inglaterra'));
const MEX_1970 = lazy(() => import('../pages/mundiales/1970-México'));
const GER_1974 = lazy(() => import('../pages/mundiales/1974-Alemania'));
const ARG_1978 = lazy(() => import('../pages/mundiales/1978-Argentina'));
const ESP_1982 = lazy(() => import('../pages/mundiales/1982-España'));
const MEX_1986 = lazy(() => import('../pages/mundiales/1986-México'));
const ITA_1990 = lazy(() => import('../pages/mundiales/1990-Italia'));
const USA_1994 = lazy(() => import('../pages/mundiales/1994-Estados-Unidos'));
const FRA_1998 = lazy(() => import('../pages/mundiales/1998-Francia'));
const KOR_JAP_2002 = lazy(() => import('../pages/mundiales/2002-Corea-Japon'));
const GER_2006 = lazy(() => import('../pages/mundiales/2006-Alemania'));
const SUD_2010 = lazy(() => import('../pages/mundiales/2010-Sudafrica'));
const BRA_2014 = lazy(() => import('../pages/mundiales/2014-Brasil'));
const RUS_2018 = lazy(() => import('../pages/mundiales/2018-Rusia'));
const QAT_2022 = lazy(() => import('../pages/mundiales/2022-Catar'));
// Const
function Loading() {
    return <div>Loadding...</div>;
}

function RoutesConfig() {
    return (
        <Suspense fellback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/mundiales' element={<Mundiales />} />
                <Route path='/mundiales/1930' element={<URU_1930 />} />
                <Route path='/mundiales/1934' element={<ITA_1934 />} />
                <Route path='/mundiales/1938' element={<FRA_1938 />} />
                <Route path='/mundiales/1950' element={<BRA_1950 />} />
                <Route path='/mundiales/1954' element={<SUI_1954 />} />
                <Route path='/mundiales/1958' element={<SWE_1958 />} />
                <Route path='/mundiales/1962' element={<CHI_1962 />} />
                <Route path='/mundiales/1966' element={<ENG_1966 />} />
                <Route path='/mundiales/1970' element={<MEX_1970 />} />
                <Route path='/mundiales/1974' element={<GER_1974 />} />
                <Route path='/mundiales/1978' element={<ARG_1978 />} />
                <Route path='/mundiales/1982' element={<ESP_1982 />} />
                <Route path='/mundiales/1986' element={<MEX_1986 />} />
                <Route path='/mundiales/1990' element={<ITA_1990 />} />
                <Route path='/mundiales/1994' element={<USA_1994 />} />
                <Route path='/mundiales/1998' element={<FRA_1998 />} />
                <Route path='/mundiales/2002' element={<KOR_JAP_2002 />} />
                <Route path='/mundiales/2006' element={<GER_2006 />} />
                <Route path='/mundiales/2010' element={<SUD_2010 />} />
                <Route path='/mundiales/2014' element={<BRA_2014 />} />
                <Route path='/mundiales/2018' element={<RUS_2018 />} />
                <Route path='/mundiales/2022' element={<QAT_2022 />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
}

export default RoutesConfig;
