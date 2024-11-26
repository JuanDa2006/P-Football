// Imports
import React, { lazy, Suspense, useMemo } from 'react';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import ScrollToTopRoute from '../hooks/scrollToTop';

// Routes
const Home = lazy(() => import('../pages/home'));
const ErrorPage = lazy(() => import('../error/errorPage'));
const Test = lazy(() => import('../pages/test'));

// Mundiales
const Mundiales = lazy(() => import('../pages/mundiales'));

const URU_1930 = lazy(() => import('../pages/mundiales/1930/1930-Uruguay'));
const URU_1930_G = lazy(() => import('../pages/mundiales/1930/1930-grupos'));

const ITA_1934 = lazy(() => import('../pages/mundiales/1934/1934-Italia'));
const ITA_1934_G = lazy(() => import('../pages/mundiales/1934/1934-grupos'));

const FRA_1938 = lazy(() => import('../pages/mundiales/1938/1938-Francia'));
const FRA_1938_G = lazy(() => import('../pages/mundiales/1938/1938-grupos'));

const BRA_1950 = lazy(() => import('../pages/mundiales/1950/1950-Brasil'));
const BRA_1950_G = lazy(() => import('../pages/mundiales/1950/1950-grupos'));

const SUI_1954 = lazy(() => import('../pages/mundiales/1954/1954-Suiza'));
const SUI_1954_G = lazy(() => import('../pages/mundiales/1954/1954-grupos'));

const SWE_1958 = lazy(() => import('../pages/mundiales/1958/1958-Suecia'));
const SWE_1958_G = lazy(() => import('../pages/mundiales/1958/1958-grupos'));

const CHI_1962 = lazy(() => import('../pages/mundiales/1962/1962-Chile'));
const CHI_1962_G = lazy(() => import('../pages/mundiales/1962/1962-grupos'));

const ENG_1966 = lazy(() => import('../pages/mundiales/1966/1966-Inglaterra'));
const ENG_1966_G = lazy(() => import('../pages/mundiales/1966/1966-grupos'));

const MEX_1970 = lazy(() => import('../pages/mundiales/1970/1970-México'));
const MEX_1970_G = lazy(() => import('../pages/mundiales/1970/1970-grupos'));

const GER_1974 = lazy(() => import('../pages/mundiales/1974/1974-Alemania'));
const GER_1974_G = lazy(() => import('../pages/mundiales/1974/1974-grupos'));

const ARG_1978 = lazy(() => import('../pages/mundiales/1978/1978-Argentina'));
const ARG_1978_G = lazy(() => import('../pages/mundiales/1978/1978-grupos'));

const ESP_1982 = lazy(() => import('../pages/mundiales/1982/1982-España'));
const ESP_1982_G = lazy(() => import('../pages/mundiales/1982/1982-grupos'));

const MEX_1986 = lazy(() => import('../pages/mundiales/1986/1986-México'));
const MEX_1986_G = lazy(() => import('../pages/mundiales/1986/1986-grupos'));

const ITA_1990 = lazy(() => import('../pages/mundiales/1990/1990-Italia'));
const ITA_1990_G = lazy(() => import('../pages/mundiales/1990/1990-grupos'));

const USA_1994 = lazy(() =>
    import('../pages/mundiales/1994/1994-Estados-Unidos')
);
const USA_1994_G = lazy(() => import('../pages/mundiales/1994/1994-grupos'));

const FRA_1998 = lazy(() => import('../pages/mundiales/1998/1998-Francia'));
const FRA_1998_G = lazy(() => import('../pages/mundiales/1998/1998-grupos'));

const KOR_JAP_2002 = lazy(() =>
    import('../pages/mundiales/2002/2002-Corea-Japon')
);
const KOR_JAP_2002_G = lazy(() =>
    import('../pages/mundiales/2002/2002-grupos')
);

const GER_2006 = lazy(() => import('../pages/mundiales/2006/2006-Alemania'));
const GER_2006_G = lazy(() => import('../pages/mundiales/2006/2006-grupos'));

const SUD_2010 = lazy(() => import('../pages/mundiales/2010/2010-Sudafrica'));
const SUD_2010_G = lazy(() => import('../pages/mundiales/2010/2010-grupos'));
const SUD_2010_P = lazy(() => import('../pages/mundiales/2010/2010-partidos'));
const BRA_2014 = lazy(() => import('../pages/mundiales/2014/2014-Brasil'));
const BRA_2014_G = lazy(() => import('../pages/mundiales/2014/2014-grupos'));

const RUS_2018 = lazy(() => import('../pages/mundiales/2018/2018-Rusia'));
const RUS_2018_G = lazy(() => import('../pages/mundiales/2018/2018-grupos'));
const RUS_2018_P = lazy(() => import('../pages/mundiales/2018/2018-partidos'));
const QAT_2022 = lazy(() => import('../pages/mundiales/2022/2022-Catar'));
const QAT_2022_G = lazy(() => import('../pages/mundiales/2022/2022-grupos'));
const QAT_2022_P = lazy(() => import('../pages/mundiales/2022/2022-partidos'));
// Const
function Loading() {
    return <div>Loadding...</div>;
}

function RoutesConfig() {
    const routes = useMemo(() => [
        { path: '*', element: <ErrorPage /> },
        { path: '/', element: <Home /> },
        { path: '/test', element: <Test /> },
        { path: '/mundiales', element: <Mundiales /> },
        { path: '/mundiales/1930', element: <URU_1930 /> },
        { path: '/mundiales/1930/grupos', element: <URU_1930_G /> },
        { path: '/mundiales/1934', element: <ITA_1934 /> },
        { path: '/mundiales/1934/grupos', element: <ITA_1934_G /> },
        { path: '/mundiales/1938', element: <FRA_1938 /> },
        { path: '/mundiales/1938/grupos', element: <FRA_1938_G /> },
        { path: '/mundiales/1950', element: <BRA_1950 /> },
        { path: '/mundiales/1950/grupos', element: <BRA_1950_G /> },
        { path: '/mundiales/1954', element: <SUI_1954 /> },
        { path: '/mundiales/1954/grupos', element: <SUI_1954_G /> },
        { path: '/mundiales/1958', element: <SWE_1958 /> },
        { path: '/mundiales/1958/grupos', element: <SWE_1958_G /> },
        { path: '/mundiales/1962', element: <CHI_1962 /> },
        { path: '/mundiales/1962/grupos', element: <CHI_1962_G /> },
        { path: '/mundiales/1966', element: <ENG_1966 /> },
        { path: '/mundiales/1966/grupos', element: <ENG_1966_G /> },
        { path: '/mundiales/1970', element: <MEX_1970 /> },
        { path: '/mundiales/1970/grupos', element: <MEX_1970_G /> },
        { path: '/mundiales/1974', element: <GER_1974 /> },
        { path: '/mundiales/1974/grupos', element: <GER_1974_G /> },
        { path: '/mundiales/1978', element: <ARG_1978 /> },
        { path: '/mundiales/1978/grupos', element: <ARG_1978_G /> },
        { path: '/mundiales/1982', element: <ESP_1982 /> },
        { path: '/mundiales/1982/grupos', element: <ESP_1982_G /> },
        { path: '/mundiales/1986', element: <MEX_1986 /> },
        { path: '/mundiales/1986/grupos', element: <MEX_1986_G /> },
        { path: '/mundiales/1990', element: <ITA_1990 /> },
        { path: '/mundiales/1990/grupos', element: <ITA_1990_G /> },
        { path: '/mundiales/1994', element: <USA_1994 /> },
        { path: '/mundiales/1994/grupos', element: <USA_1994_G /> },
        { path: '/mundiales/1998', element: <FRA_1998 /> },
        { path: '/mundiales/1998/grupos', element: <FRA_1998_G /> },
        { path: '/mundiales/2002', element: <KOR_JAP_2002 /> },
        { path: '/mundiales/2002/grupos', element: <KOR_JAP_2002_G /> },
        { path: '/mundiales/2006', element: <GER_2006 /> },
        { path: '/mundiales/2006/grupos', element: <GER_2006_G /> },
        { path: '/mundiales/2010', element: <SUD_2010 /> },
        { path: '/mundiales/2010/grupos', element: <SUD_2010_G /> },
        { path: '/mundiales/2010/partidos', element: <SUD_2010_P /> },
        { path: '/mundiales/2014', element: <BRA_2014 /> },
        { path: '/mundiales/2014/grupos', element: <BRA_2014_G /> },
        { path: '/mundiales/2018', element: <RUS_2018 /> },
        { path: '/mundiales/2018/grupos', element: <RUS_2018_G /> },
        { path: '/mundiales/2018/partidos', element: <RUS_2018_P /> },
        { path: '/mundiales/2022', element: <QAT_2022 /> },
        { path: '/mundiales/2022/grupos', element: <QAT_2022_G /> },
        { path: '/mundiales/2022/partidos', element: <QAT_2022_P /> },
    ]);

    return (
        <>
            <ScrollToTopRoute />
            <Suspense fellback={<Loading />}>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route id={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default RoutesConfig;
