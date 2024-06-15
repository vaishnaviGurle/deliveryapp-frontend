import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="intro-section">
        <h2>Welcome to Ziggy</h2>
        <p>Your on-demand delivery partner for food and groceries.</p>
      </section>
      <section className="features-section">
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and efficiently.</p>
        </div>
        <div className="feature">
          <h3>Reliable Partners</h3>
          <p>Our delivery partners are always ready to serve you.</p>
        </div>
        <div className="feature">
          <h3>Track Your Orders</h3>
          <p>Stay updated with real-time tracking of your orders.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
