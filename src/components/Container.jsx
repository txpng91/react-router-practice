import React from 'react';
import Home from './Home';
import Blue from './Blue';
import Red from './Red';
// Importing Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
function Container() {
  return (
    <div id='main-section'>
      {/* Placing the Routes tag inside the main section */}
      <Routes>
        {/* All routes will listed inside this Routes tag*/}
        <Route path='/' element={<Home />} />
        <Route path='/blue' element={<Blue />} />
        <Route path='/red' element={<Red />} />
      </Routes>
    </div>
  );
}
export default Container;
