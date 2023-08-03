import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import './style.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div id='container'>
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
