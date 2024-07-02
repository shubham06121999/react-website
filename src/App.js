import React from 'react';

import ContactUs from 'pages/ContactUs';
import Home from 'pages/Home';
import Services from 'pages/Services';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';

import { EmailProvider } from './contexts/EmailContext';
import AboutUs from './pages/AboutUs/AboutUs';
import {HelmetProvider } from 'react-helmet-async';
export default function App() { 


  return (
    <><HelmetProvider>
    <EmailProvider>
      <GlobalStyles />
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/HireUS" element={<ContactUs />} />
        </Routes>
      </Router>
      </EmailProvider>
      </HelmetProvider>
    </>
  );
} 
