import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeliveryPartnersList from './components/DeliveryPartnerList';
import OrdersList from './components/OrderList';
import HomePage from './pages/HomePage';
import './App.css'; // Import the global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Delivery App</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/delivery-partners">Delivery Partners</a></li>
              <li><a href="/orders">Orders</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/delivery-partners" element={<DeliveryPartnersList />} />
            <Route path="/orders" element={<OrdersList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
