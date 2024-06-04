import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Price from './pages/Prices';
import Exchanges from './pages/Exchanges';
import News from './pages/News';

function App() {
  return (    
  <Router>
    <Header pageName={"Crypto Dashboard"}></Header>
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prices" element={<Price />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/preferences" element={<h1>Preferences</h1>} />
          <Route path="/help" element={<h1>Help</h1>} />
        </Routes>
      </div>
    </div>
  </Router>    

  );
};

export default App;
