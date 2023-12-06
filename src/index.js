import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WelcomeView from './screens/welcome/WelcomeView';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WelcomeView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


