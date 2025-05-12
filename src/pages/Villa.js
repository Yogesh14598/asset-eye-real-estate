import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import villa3 from "../assets/villa3.jpg";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    location: "Bandra, Mumbai",
    price: "₹4.5 Cr",
    image: property1,
  },
  {
    id: 2,
    title: "2BHK Villa",
    location: "Thane West",
    price: "₹85 Lakh",
    image: property2,
  },
  {
    id: 3,
    title: "3BHK Villa",
    location: "Pune",
    price: "₹85 Lakh",
    image: villa3,
  },
];

const Villa = () => {
  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Available Villa</h2>
      <Row>
        {mockProperties.map((property) => (
          <Col md={6} lg={4} key={property.id}>
            <PropertyCard {...property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Villa;
