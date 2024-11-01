import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
