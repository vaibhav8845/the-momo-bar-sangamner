import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Menu from './components/Pages/Menu/Menu';
import OurStory from './components/Pages/OurStory/OurStory';
import ContactUs from './components/Pages/Contact Us/ContactUs';
import MomosGallery from './components/Pages/Momos Gallery/MomosGallery';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Login from './components/Login/Login';
import OrderForm from './components/From/OrderForm';
import ShowData from './components/ShowData/ShowData';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      

      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/momosGallery" element={<MomosGallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/showdata" element={<ShowData />} />

          {/* Redirect unknown routes to home page */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
