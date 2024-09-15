import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Menu from './components/Pages/Menu/Menu';
import OurStory from './components/Pages/OurStory/OurStory';
import ContactUs from './components/Pages/Contact Us/ContactUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MomosGallery from './components/Pages/Momos Gallery/MomosGallery';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      
 <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/momosGallery" element={<MomosGallery />} />

        <Route path="/contactUs" element={<ContactUs />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
