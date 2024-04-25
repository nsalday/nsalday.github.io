/*
  Author: Neil Vincent S. Alday
  Represents as the main of the react-app
  - This handles the routes/ paths of the app
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header-component';
import Accessories from './components/accessories-component';
import Appliances from './components/appliances-component';
import Gadgets from './components/gadgets-component';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <p>Add items to your cart!</p>
        <Routes>
          <Route path="/accessories" element={<Accessories/>}/> 
          <Route path="/appliances" element={<Appliances/>}/>
          <Route path="/gadgets" element={<Gadgets/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
