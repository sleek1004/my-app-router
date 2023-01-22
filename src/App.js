
import React from 'react'
import { BrowserRouter as Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'






function Rout() {
  return (
    <BrowserRouter>
      <nav>
        <li><Link to ="/">Home</Link></li>
     
      </nav>
     
     <Routes>
        <Route path="/" element={<Home />} />
        
       
      </Routes>
    
    </BrowserRouter>
  );
}

export default function App (){
return(
  <Rout/>
)
}


