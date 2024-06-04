import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderList from './OrderList';
import CreateOrder from './CreateOrder';
import DeliveryPartnerList from './DeliveryPartnerList';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Order Fulfillment</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Order List</Nav.Link>
          <Nav.Link as={Link} to="/create-order">Create Order</Nav.Link>
          <Nav.Link as={Link} to="/delivery-partners">Delivery Partners</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route exact path="/" element={<OrderList />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/delivery-partners" element={<DeliveryPartnerList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
