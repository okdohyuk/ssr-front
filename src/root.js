import App from './pages/App';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

export default function Root() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
}
