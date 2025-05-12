import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PropertyCard = ({ title, location, price, image }) => {
  return (
    <Card className="mb-4 shadow" bg="dark" text="white">
      <div style={{height: '250px'}}>
      <Card.Img variant="top" src={image} height="100%" width="100%" style={{ objectFit: 'cover' }} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <Card.Text><strong>{price}</strong></Card.Text>
        <Button variant="warning" className='btn-animated'>View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
