import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
 <BrowserRouter>
  <div>
    <h1>my page is showing</h1> 
  <Home/>
  <Routes>
  <Route path='/'element={<Home />} />
  </Routes>
  </div>
  </BrowserRouter>
 
     
    
  );
}

export default App;
