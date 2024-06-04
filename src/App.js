import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './styles/App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Price from './pages/Prices';

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
          <Route path="/exchanges" element={<h1>Exchanges</h1>} />
          <Route path="/news" element={<h1>News</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/preferences" element={<h1>Preferences</h1>} />
          <Route path="/help" element={<h1>Help</h1>} />
        </Routes>
      </div>
    </div>
  </Router>    

  );
}

export default App;
