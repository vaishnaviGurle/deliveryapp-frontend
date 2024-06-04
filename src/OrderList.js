import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data since there's no backend
    const mockOrders = [
      { _id: 1, status: 'unassigned' },
      { _id: 2, status: 'assigned' }
    ];
    setOrders(mockOrders);
  }, []);

  const markAsDelivered = (id) => {
    setOrders(orders.map(order => (order._id === id ? { ...order, status: 'delivered' } : order)));
  };

  return (
    <div>
      <h2>Orders</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order._id}>
            {order.status === 'unassigned' ? 'Unassigned' : 'Assigned'}
            <Button variant="success" onClick={() => markAsDelivered(order._id)} className="ml-3">
              Mark as Delivered
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default OrderList;
