import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const demoSessions = [
  {
    course: "MERN Stack",
    trainer: "Yogesh & Bharath",
    techStack: "React.js, Node.js, MongoDB",
    date: "Oct 5, 2025",
    time: "10:00 AM",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    batchStart: "Oct 10, 2025",
    icon: "⚛️"
  },
  {
    course: "Data Analyst",
    trainer: "Harish", 
    techStack: "PowerBI, SQL, Excel, VBA, Tableau",
    date: "Oct 7, 2025",
    time: "2:00 PM",
    meetingLink: "https://meet.google.com/xyz-uvwx-rst",
    batchStart: "Oct 12, 2025",
    icon: "🐍"
  },
  {
    course: "Programming Languages",
    trainer: "Bharath",
    techStack: "JavaScript, TypeScript, OOPS, Coding Problems",
    date: "Oct 8, 2025", 
    time: "11:00 AM",
    meetingLink: "https://meet.google.com/def-ghij-klm",
    batchStart: "Oct 15, 2025",
    icon: "☕"
  },
  {
    course: "Aptitude",
    trainer: "Yogesh",
    techStack: "Aptitude, Verbal, Non-Verbal",
    date: "Oct 8, 2025", 
    time: "3:00 PM",
    meetingLink: "https://meet.google.com/apt-itud-xyz",
    batchStart: "Oct 15, 2025",
    icon: "🧠"
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DemoSession = () => (
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
        Upcoming Demo Sessions
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row>
          {demoSessions.map((session, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div variants={cardVariants}>
                <Card
                  style={{
                    backgroundColor: "#2c3034",
                    border: "1px solid #ffc107",
                    color: "#ffc107",
                    borderRadius: "1rem",
                    minHeight: "350px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                  className="h-100 p-3"
                >
                  <Card.Body>
                    <div className="text-center mb-3">
                      <div style={{ fontSize: '3rem' }}>{session.icon}</div>
                      <h4>{session.course}</h4>
                    </div>
                    
                    <div className="mb-3">
                      <strong>👨‍🏫 Trainer:</strong> {session.trainer}
                    </div>
                    
                    <div className="mb-3">
                      <strong>💻 Tech Stack:</strong><br/>
                      <small>{session.techStack}</small>
                    </div>
                    
                    <div className="mb-3">
                      <strong>📅 Demo Date:</strong> {session.date}<br/>
                      <strong>🕐 Time:</strong> {session.time}
                    </div>
                    
                    <div className="mb-3">
                      <Badge bg="success" className="mb-2">
                        Batch Starts: {session.batchStart}
                      </Badge>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <Button 
                        variant="warning" 
                        size="sm" 
                        href={session.meetingLink}
                        target="_blank"
                      >
                        Join Demo Session
                      </Button>
                      <Button variant="outline-warning" size="sm">
                        Register for Batch
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
      
      <motion.div 
        className="text-center mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="alert alert-info">
          <h5>🎯 Demo Session Policy</h5>
          <p className="mb-0">
            Attend our demo session first! Only register if you find our teaching method interesting. 
            We believe in quality over quantity - that's why we show you exactly what you'll learn.
          </p>
        </div>
      </motion.div>
    </Container>
  </section>
);

export default DemoSession;