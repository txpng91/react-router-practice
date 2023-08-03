import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div id='navbar'>
      <Link to={'/'}>Home</Link>
      <Link to={'/blue'}>Blue</Link>
      <Link to={'/red'}>Red</Link>
    </div>
  );
}

export default Navbar;
