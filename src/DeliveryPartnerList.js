import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function DeliveryPartnerList() {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    // Mock data since there's no backend
    const mockExecutives = [
      { _id: 1, status: 'available' },
      { _id: 2, status: 'unavailable' }
    ];
    setExecutives(mockExecutives);
  }, []);

  return (
    <div>
      <h2>Delivery Executives</h2>
      <ListGroup>
        {executives.map(exec => (
          <ListGroup.Item key={exec._id}>{exec.status}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default DeliveryPartnerList;
