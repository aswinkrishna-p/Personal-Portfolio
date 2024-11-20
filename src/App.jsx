import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import MyWorks from './Components/MyWorks';
import Contacts from './Components/Contacts';

function App(props) {
  return (
    <div className='overflow-x-hidden antialiased'>
    <div className='container mx-auto px-4 sm:px-8 lg:px-14 '>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <MyWorks/>
      <Contacts/>
    </div>
    </div>
  );
}

export default App;