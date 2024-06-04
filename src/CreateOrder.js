import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function CreateOrder() {
  const [source, setSource] = useState({ lat: '', lon: '' });
  const [destination, setDestination] = useState({ lat: '', lon: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Created', { source, destination });
    setSource({ lat: '', lon: '' });
    setDestination({ lat: '', lon: '' });
  };

  return (
    <div>
      <h2>Create Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Source Latitude:</Form.Label>
              <Form.Control
                type="number"
                value={source.lat}
                onChange={(e) => setSource({ ...source, lat: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Source Longitude:</Form.Label>
              <Form.Control
                type="number"
                value={source.lon}
                onChange={(e) => setSource({ ...source, lon: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Destination Latitude:</Form.Label>
              <Form.Control
                type="number"
                value={destination.lat}
                onChange={(e) => setDestination({ ...destination, lat: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Destination Longitude:</Form.Label>
              <Form.Control
                type="number"
                value={destination.lon}
                onChange={(e) => setDestination({ ...destination, lon: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Button type="submit" variant="primary">Create Order</Button>
      </Form>
    </div>
  );
}

export default CreateOrder;
