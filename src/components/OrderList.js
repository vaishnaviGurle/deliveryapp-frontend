import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Alert, Form, FormControl, FormGroup, ListGroup } from 'react-bootstrap';
import './OrderList.css';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    source: { latitude: '', longitude: '' },
    destination: { latitude: '', longitude: '' }
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
        setError('');
      } catch (error) {
        setError('Error fetching orders. Please try again.');
      }
    };

    fetchOrders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, key] = name.split('.');
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [key]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/orders', formData);
      setOrders([...orders, response.data]);
      setFormData({
        source: { latitude: '', longitude: '' },
        destination: { latitude: '', longitude: '' }
      });
      setError('');
    } catch (err) {
      setError('Error creating order. Please try again.');
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
      setOrders(orders.map(order => (order._id === id ? response.data : order)));
      setError('');
    } catch (err) {
      setError('Error updating order status. Please try again.');
    }
  };

  return (
    <div className="container-fluid">
      <h2>Orders</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="mb-4">
        <FormGroup>
          <Form.Label>Source Latitude:</Form.Label>
          <FormControl
            type="text"
            name="source.latitude"
            value={formData.source.latitude}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Source Longitude:</Form.Label>
          <FormControl
            type="text"
            name="source.longitude"
            value={formData.source.longitude}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Destination Latitude:</Form.Label>
          <FormControl
            type="text"
            name="destination.latitude"
            value={formData.destination.latitude}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Destination Longitude:</Form.Label>
          <FormControl
            type="text"
            name="destination.longitude"
            value={formData.destination.longitude}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" variant="primary" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00' }}>
          Create Order
        </Button>
      </Form>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order._id} className="d-flex justify-content-between align-items-start mb-2">
            <div>
              Source: ({order.source?.latitude}, {order.source?.longitude}) - Destination: ({order.destination?.latitude}, {order.destination?.longitude}) - Status: {order.status}
            </div>
            <div className="btn-group flex-column">
              <Button style={{ backgroundColor: '#f57c00', borderColor: '#f57c00' }} size="sm" className="mb-1" onClick={() => updateOrderStatus(order._id, 'assigned')}>
                Assign
              </Button>
              <Button style={{ backgroundColor: '#f57c00', borderColor: '#f57c00' }} size="sm" className="mb-1" onClick={() => updateOrderStatus(order._id, 'unassigned')}>
                Unassign
              </Button>
              {/* <Button style={{ backgroundColor: '#f57c00', borderColor: '#f57c00' }} size="sm" className="mb-1" onClick={() => updateOrderStatus(order._id, 'pending')}>
                Pending
              </Button> */}
              <Button style={{ backgroundColor: '#f57c00', borderColor: '#f57c00' }} size="sm" className="mb-2" onClick={() => updateOrderStatus(order._id, 'complete')}>
                Complete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OrdersList;