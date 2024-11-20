import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './input.css';
import RoutesConfig from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <RoutesConfig />
    </BrowserRouter>
);
