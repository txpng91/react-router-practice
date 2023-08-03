import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Footer from './components/Footer.jsx';
// Importing BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
