import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <li><Link to="/">Home</Link></li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

