import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from './Pages/About/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Contact from './Pages/Contact/Contact';
import Buy from './Pages/Buy/Buy';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

export default function App() {
  const location = useLocation();
  const showNavbarFooterRoutes = ['/home', '/about', '/contact', '/buy', '/purchase']; // Routes where Navbar and Footer should be shown

  const shouldShowNavbarFooter = showNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='*' element={<Login />} />
      </Routes>
      {shouldShowNavbarFooter && <Footer />}
    </>
  );
}
