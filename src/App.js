import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/header/Header';
import {Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop';
import Products from './pages/Products';
import Guide from './pages/Guide';
import Fertilizer from './pages/Fertilizer';
import HeroBanner from './pages/HeroBanner';
import FreeShipping from './pages/FreeShipping';
import Map from './pages/Map';
import Search from './pages/Search';
import PlantStands from './pages/PlantStands';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Route exact path='/' element={<Shop/>} />
        <Route path='products' element={<Products/>}/>
        <Route path='guide' element={<Guide/>}/>
        <Route path='fertilizer' element={<Fertilizer/>}/>
      </Routes> */}
      <HeroBanner/>
      <Search/>
      <PlantStands/>
      <FreeShipping/>
      <Map/>
    </div>
  );
}

export default App;
