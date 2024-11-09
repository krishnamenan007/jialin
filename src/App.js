import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import React, { useEffect } from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Finsync from './pages/Finsync';
import Privacy from './pages/privacypolicy';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/finsync_ai" element={<Finsync/>}/>
        <Route path="/privacy_policy" element={<Privacy/>}/>




      </Routes>
        
      
      
      
      
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
