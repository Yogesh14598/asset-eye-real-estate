import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
        <section id="about" className="about-section py-5 mb-4">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">About Code2Dream</h2>
          <p
            className="about-text mx-auto text-center"
            style={{ maxWidth: "800px" }}
          >
            At <strong>CODE2DREAM</strong>, we believe coding is more than
            just writing programs—it's about transforming dreams into reality and 
            building the future through technology. Whether you're a fresh graduate, 
            experienced professional looking to switch careers, or someone with a career gap,
            we're here to guide you every step of your coding journey.
            <br />
            <br />
            Established in <strong>2025</strong>, we are a new but ambitious software training 
            and placement institute in Bangalore. In our first year, we have successfully 
            placed <strong>10+ students</strong> in reputed companies, proving our commitment 
            to quality education and results.
            <br />
            <br />
            From complete beginners to experienced professionals, we work closely with
            our students to understand their goals and help them make smart, informed
            career decisions in the fast-evolving tech industry. With <strong>CODE2DREAM</strong>,
            you're not just getting training—you're getting partners who care about 
            your professional success.
            <br />
            <br />
            <strong>Our Mission:</strong> To bridge the gap between academic knowledge and 
            industry requirements by providing world-class training with 100% placement assistance.
            <br />
            <br />
            <strong>What Makes Us Unique:</strong>
            <ul className="text-start mt-3" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <li>Small batch size (Maximum 15 students) for personalized attention</li>
              <li>1:1 mentoring sessions with industry professionals</li>
              <li>Flexible payment options (30% upfront, rest as per progress)</li>
              <li>10-day money-back guarantee</li>
              <li>Demo sessions mandatory before enrollment</li>
              <li>Both online and offline training available</li>
            </ul>
            <br />
            <em>Let's code your dreams into reality—together.</em>
          </p>
        </motion.div>
      </section>

      {/* Our Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4>IT Experts as Trainers</h4>
                <p>Learning with professionals who have real industry experience solves 60% of your career needs.</p>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>100% Hands-on Training</h4>
                <p>We focus on practical, hands-on training with real-world projects and scenarios.</p>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4>Placement Assistance</h4>
                <p>100% placement assistance with interview preparation and career guidance.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">15</h2>
                <p>Max Students Per Batch</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">20+</h2>
                <p>Courses Available</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">10+</h2>
                <p>Students Placed</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">1</h2>
                <p>Year of Excellence</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default AboutUs