import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DemoSession from "./DemoSession";
import FAQ from "./FAQ";
import LatestUpdates from "./LatestUpdates";
import backgroundImage from "../assets/backgroundc2c.jpg";

const testimonials = [
  {
    name: "Rajesh Kumar",
    feedback:
      "Code2Dream helped me transition from mechanical engineer to Full Stack Developer with 6.5 LPA package!",
    location: "Bangalore",
    course: "Full Stack Development",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Amazing training institute! Got placed as Data Analyst with 7.5 LPA after 12 years career break.",
    location: "Hyderabad",
    course: "Data Science",
  },
  {
    name: "Arun Patel",
    feedback:
      "Excellent hands-on training in Python. Now working as AI/ML Engineer with 5 LPA package.",
    location: "Chennai",
    course: "Python & Machine Learning",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="home-hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("${backgroundImage}")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          position: 'relative'
        }}
      >
        {/* Overlay pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4"
          >
            Master Your Coding Skills with Code2Dream
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lead"
          >
            Leading software training & placement institute for aspiring developers.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              as={Link}
              to="/courses"
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
              View Courses
            </Button>

            <Button
              as={Link}
              to="/training"
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
              Training Programs
            </Button>
          </motion.div>
        </Container>
      </div>
      
      {/* Freelance Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4">We Also Do Freelance Projects</h2>
            <p className="lead mb-4">
              Need a website, mobile app, or data analysis solution for your business? 
              Our expert team provides freelance development services.
            </p>
            <Row>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">🌐</div>
                    <h5>Web Development</h5>
                    <p>Full-stack web applications, e-commerce sites, business websites</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">📊</div>
                    <h5>Data Analysis</h5>
                    <p>Business intelligence, data visualization, reporting dashboards</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">🤖</div>
                    <h5>Automation</h5>
                    <p>Process automation, testing automation, workflow optimization</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Button variant="warning" size="lg" as={Link} to="/contact" className="mt-3">
              Start Your Coding Journey
            </Button>
          </motion.div>
        </Container>
      </section>
      
      <LatestUpdates />
      <DemoSession />
      <FAQ />
    </>
  );
};

export default Home;
