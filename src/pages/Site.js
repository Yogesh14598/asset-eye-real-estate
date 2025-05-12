import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";
import site1 from "../assets/site1.jpg";
import site2 from "../assets/site2.jpg";
import site3 from "../assets/site3.jpg";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Site in Mumbai",
    location: "Bandra, Mumbai",
    price: "₹4.5 Cr",
    image: site1,
  },
  {
    id: 2,
    title: "2BHK Site",
    location: "Thane West",
    price: "₹85 Lakh",
    image: site2,
  },
  {
    id: 3,
    title: "3BHK Site",
    location: "Pune",
    price: "₹85 Lakh",
    image: site3,
  },
];

const Site = () => {
  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Available Site</h2>
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

export default Site;
