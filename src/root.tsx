import App from './components/App';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

const Root: React.FC = () =>  {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;