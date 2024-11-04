// Routes
import Home from '../pages/home';
import Test from '../pages/test';

// Const
const routesConfig = [
    { path: '/', name: 'Inicio', element: <Home /> },
    { path: '/test', name: 'Test', element: <Test /> },
];

const routes = routesConfig.map((route) => ({
    path: route.path,
    element: route.element,
}));

export default routes;
