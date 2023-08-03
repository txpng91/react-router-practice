import React from 'react';
// Importing Routes and Route from react-router-dom
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import './style.css';
function App() {
  return (
    <div id='container'>
      <div id='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/blue'}>Blue</Link>
        <Link to={'/red'}>Red</Link>
      </div>
      <div id='main-section'>
        {/* Placing the Routes tag inside the main section */}
        <Routes>
          {/* All routes will listed inside this Routes tag*/}
          <Route path='/' element={<Home />} />
          <Route path='/blue' element={<Blue />} />
          <Route path='/red' element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
