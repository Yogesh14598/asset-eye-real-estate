import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";
import flat1 from "../assets/flat1.jpg";
import flat2 from "../assets/flat2.jpg";
import flat4 from "../assets/flat4.jpg";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Flat in Mumbai",
    location: "Bandra, Mumbai",
    price: "₹4.5 Cr",
    image: flat1,
  },
  {
    id: 2,
    title: "2BHK Flat",
    location: "Thane West",
    price: "₹85 Lakh",
    image: flat4,
  },
  {
    id: 3,
    title: "3BHK Flat",
    location: "Pune",
    price: "₹85 Lakh",
    image: flat1,
  },
];

const Flat = () => {
  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Available Flat</h2>
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

export default Flat;
