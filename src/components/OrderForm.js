import React, { useState } from 'react';
import axios from 'axios';

const CreateOrderForm = () => {
  const [formData, setFormData] = useState({
    source: { latitude: '', longitude: '' },
    destination: { latitude: '', longitude: '' }
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', formData);
      setError('');
      alert('Order created successfully!');
    } catch (error) {
      setError('Error creating order. Please try again.');
    }
  };

  return (
    <div className="create-order-form">
      <h2>Create New Order</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sourceLatitude">Source Latitude:</label>
          <input type="text" id="sourceLatitude" name="source.latitude" value={formData.source.latitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sourceLongitude">Source Longitude:</label>
          <input type="text" id="sourceLongitude" name="source.longitude" value={formData.source.longitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="destinationLatitude">Destination Latitude:</label>
          <input type="text" id="destinationLatitude" name="destination.latitude" value={formData.destination.latitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="destinationLongitude">Destination Longitude:</label>
          <input type="text" id="destinationLongitude" name="destination.longitude" value={formData.destination.longitude} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-create-order">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrderForm;
