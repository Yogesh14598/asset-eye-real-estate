import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

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

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const TestimonialSection = () => (
  <section
    style={{ color: "#ffc107", padding: "4rem 0" }}
  >
    <Container>
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ fontWeight: "bold" }}
      >
        What Our Clients Say
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div>
                <Card
                  style={{
                    backgroundColor: "#2c3034",
                    border: "1px solid #ffc107",
                    color: "#ffc107",
                    borderRadius: "1rem",
                    minHeight: "250px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                  className="h-100 p-3"
                >
                  <Card.Body>
                    <Card.Text style={{ fontStyle: "italic" }}>
                      “{testimonial.feedback}”
                    </Card.Text>
                    <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                    <Card.Subtitle>
                      {testimonial.location}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  </section>
);

export default TestimonialSection;
