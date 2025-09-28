import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

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
        What Our Students Say
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
                      {testimonial.course} • {testimonial.location}
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
