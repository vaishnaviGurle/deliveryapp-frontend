// DeliveryPartnerList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, FormControl, FormGroup, FormLabel, Alert, ListGroup } from 'react-bootstrap';
import './DeliveryPartnerList.css';  // Import custom styles

const DeliveryPartnerList = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [partnerName, setPartnerName] = useState('');
  const [partnerAge, setPartnerAge] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to fetch delivery partners from the server
  const fetchDeliveryPartners = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/delivery-partners');
      setDeliveryPartners(response.data);
    } catch (err) {
      setError('Error fetching delivery partners. Please try again.');
    }
  };

  // Fetch delivery partners when the component mounts
  useEffect(() => {
    fetchDeliveryPartners();
  }, []);

  // Function to handle creating a new delivery partner
  const handleCreateDeliveryPartner = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/delivery-partners', {
        name: partnerName,
        age: partnerAge
      });
      setDeliveryPartners([...deliveryPartners, response.data]);
      setPartnerName('');
      setPartnerAge('');
      setError('');
      setSuccessMessage('Delivery partner created successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);  // Clear success message after 3 seconds
    } catch (err) {
      setError('Error creating delivery partner. Please try again.');
    }
  };

  // Function to handle deleting a delivery partner
  const handleDeleteDeliveryPartner = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delivery-partners/${id}`);
      const updatedPartners = deliveryPartners.filter(partner => partner._id !== id);
      setDeliveryPartners(updatedPartners);
      setError('');
      setSuccessMessage('Delivery partner deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);  // Clear success message after 3 seconds
    } catch (err) {
      setError('Error deleting delivery partner. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Delivery Partners</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form className="text-center mb-4">
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter name"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Age</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter age"
            value={partnerAge}
            onChange={(e) => setPartnerAge(e.target.value)}
          />
        </FormGroup>
        <Button variant="primary" onClick={handleCreateDeliveryPartner} className="custom-btn">
          Create Delivery Partner
        </Button>
      </Form>
      <ListGroup>
        {deliveryPartners.map(partner => (
          <ListGroup.Item key={partner._id} className="d-flex justify-content-between align-items-center">
            {partner.name} - {partner.age}
            <div>
              <Button variant="danger" size="sm" onClick={() => handleDeleteDeliveryPartner(partner._id)}>Delete</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default DeliveryPartnerList;
