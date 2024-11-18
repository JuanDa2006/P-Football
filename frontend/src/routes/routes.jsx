// Routes
import Home from '../pages/home';
import Mundiales from '../pages/mundiales';
import Test from '../pages/test';

// Mundiales
import URU_1930 from '../pages/mundiales/1930-Uruguay';

// Const
const routesConfig = [
    { path: '/', name: 'Inicio', element: <Home /> },
    { path: '/mundiales', name: 'Mundiales', element: <Mundiales /> },
    { path: '/test', name: 'Test', element: <Test /> },
    { path: '/mundiales/mundial/1930', name: 'Uruguay - 1930', element: <URU_1930 /> },
];

export default routesConfig;