import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonalSection";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Asset Eye helped me find the perfect home. The process was smooth and professional.",
    location: "Bangalore",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Highly recommend Asset Eye for their transparent process and dedicated team.",
    location: "Hyderabad",
  },
  {
    name: "Arun Patel",
    feedback:
      "I was able to purchase a commercial property with ease. Very happy with the service.",
    location: "Chennai",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="home-hero d-flex align-items-center justify-content-center text-center text-white">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4"
          >
            Find Your Dream Property with Asset Eye
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lead"
          >
            Trusted real estate solutions for homes and businesses.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              as={Link}
              to="/site"
              style={{
                backgroundColor: "#1e1e1e",
                borderColor: "#f5b700",
                color: "#f5b700",
                marginTop: "20px",
                marginRight: "20px",
              }}
              size="lg"
              className="btn-animated"
            >
              View Sites
            </Button>

            <Button
              as={Link}
              to="/villa"
              style={{
                backgroundColor: "#f5b700",
                borderColor: "#f5b700",
                color: "black",
                marginTop: "20px",
                marginRight: "20px",
              }}
              size="lg"
              className="btn-animated"
            >
              View Villa
            </Button>

            <Button
              as={Link}
              to="/flat"
              style={{
                backgroundColor: "#00796b",
                borderColor: "#f5b700",
                color: "white",
                marginTop: "20px",
                marginRight: "20px",
              }}
              size="lg"
              className="btn-animated"
            >
              View Flats
            </Button>
          </motion.div>
        </Container>
      </div>
      <TestimonialSection />
    </>
  );
};

export default Home;
