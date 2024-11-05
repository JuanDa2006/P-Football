import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './routes/routes';
import './input.css';

const routes = routesConfig.map((route) => ({
    path: route.path,
    element: route.element,
}));

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
