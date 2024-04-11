import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './containers/Home/index';
import Contact from './containers/Contact/index';
import AboutUs from './containers/aboutUs';
import HouseDetail from './components/house-detail'; // Импортируем компонент HouseDetail
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './context/propertyContext';
import PropertyCard from './components/property-card/index';
import Favorites from './containers/favorites';
import Hire from './containers/category/hire';
import Sale from './containers/category/sale';
import Services from './containers/services';

import LanguageProvider from './context/languageContext';
import HaveSale from './containers/have-a-sale';


const App = () => {
  return (
    <Router>
      <PropertyProvider>
        <LanguageProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path='haveASale' element={<HaveSale />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path="/house" element={<HouseDetail />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/services" element={<Services />} />

          </Routes>
        </LanguageProvider>
      </PropertyProvider>
    </Router>
  );
}

export default App;
