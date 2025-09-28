import React from "react";
import { Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";

const Training = () => {
  const trainingPrograms = [
    {
      title: "Classroom Training",
      icon: "🏫",
      description: "Traditional classroom environment with direct instructor interaction",
      features: [
        "Face-to-face learning",
        "Immediate doubt resolution",
        "Group discussions and activities",
        "Practical lab sessions",
        "Peer learning opportunities"
      ],
      duration: "Weekdays/Weekends available",
      suitable: "Students who prefer structured environment"
    },
    {
      title: "Online Training",
      icon: "💻",
      description: "Flexible online classes with live instructor-led sessions",
      features: [
        "Learn from anywhere",
        "Recorded sessions for revision",
        "Interactive virtual labs",
        "24/7 support available",
        "Flexible scheduling"
      ],
      duration: "Flexible timings",
      suitable: "Working professionals and remote learners"
    },
    {
      title: "Corporate Training",
      icon: "🏢",
      description: "Customized training programs for organizations and teams",
      features: [
        "Tailored curriculum",
        "On-site training available",
        "Team building exercises",
        "Progress tracking",
        "Certification programs"
      ],
      duration: "Based on requirements",
      suitable: "Companies looking to upskill teams"
    },
    {
      title: "Weekend Batches",
      icon: "📅",
      description: "Special weekend batches for working professionals",
      features: [
        "Saturday & Sunday classes",
        "Intensive sessions",
        "Extended course duration",
        "Working professional friendly",
        "Practical project focus"
      ],
      duration: "Saturdays & Sundays",
      suitable: "Working professionals"
    }
  ];

  const trainingFeatures = [
    {
      icon: "👨‍💻",
      title: "Expert Trainers",
      description: "Industry professionals with 10+ years experience"
    },
    {
      icon: "🛠️",
      title: "Hands-on Projects",
      description: "Real-world projects to build your portfolio"
    },
    {
      icon: "📚",
      title: "Updated Curriculum",
      description: "Latest industry trends and technologies covered"
    },
    {
      icon: "🏆",
      title: "Certifications",
      description: "Industry recognized certifications upon completion"
    },
    {
      icon: "👥",
      title: "Small Batch Size",
      description: "Maximum 15 students per batch for personalized attention"
    },
    {
      icon: "💡",
      title: "Innovation Labs",
      description: "State-of-the-art labs with latest software and tools"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="training-hero py-5 bg-dark text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="display-4 mb-3">Training Programs</h1>
            <p className="lead">
              Choose from multiple training modes designed for different learning preferences
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Training Programs */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Training Modes</h2>
          <Row>
            {trainingPrograms.map((program, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 shadow-sm training-card">
                    <Card.Body>
                      <div className="text-center mb-3">
                        <div style={{ fontSize: '3rem' }}>{program.icon}</div>
                        <h4 className="card-title mt-2">{program.title}</h4>
                      </div>
                      
                      <p className="card-text">{program.description}</p>
                      
                      <h6>Features:</h6>
                      <ListGroup variant="flush">
                        {program.features.map((feature, i) => (
                          <ListGroup.Item key={i} className="border-0 px-0">
                            ✓ {feature}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                      
                      <div className="mt-3">
                        <Badge bg="warning" text="dark" className="me-2">
                          {program.duration}
                        </Badge>
                        <br />
                        <small className="text-muted mt-2 d-block">
                          <strong>Best for:</strong> {program.suitable}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Training Features */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5" style={{ color: 'white', fontWeight: 'bold' }}>
              Why Choose Our Training?
            </h2>
            <Row>
              {trainingFeatures.map((feature, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg"
                    style={{ 
                      background: 'rgba(255,255,255,0.1)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <div style={{ fontSize: '3rem' }} className="mb-3">
                      {feature.icon}
                    </div>
                    <h5 style={{ color: 'white', fontWeight: 'bold' }}>{feature.title}</h5>
                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>{feature.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Training Process */}
      <section className="py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5">Our Training Methodology</h2>
            <Row className="text-center">
              <Col md={3} className="mb-4">
                <div className="training-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    1
                  </div>
                  <h5>Foundation Building</h5>
                  <p>Strong fundamentals with theoretical concepts and practical examples</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="training-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    2
                  </div>
                  <h5>Hands-on Practice</h5>
                  <p>Extensive coding practice with real-world projects and assignments</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="training-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    3
                  </div>
                  <h5>Project Development</h5>
                  <p>End-to-end project development following industry standards</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="training-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    4
                  </div>
                  <h5>Industry Readiness</h5>
                  <p>Interview preparation and soft skills development for job readiness</p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5">Our Online Learning Benefits</h2>
            <Row>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h5>💻 Live Interactive Sessions</h5>
                    <p>Real-time coding sessions with screen sharing, code collaboration tools, and instant doubt resolution. Learn from anywhere with high-quality video and audio.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h5>� Live Industry Projects</h5>
                    <p>Work on real-world projects with live deployment. Build applications that solve actual business problems and add them to your portfolio.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h5>� Cloud Development Environment</h5>
                    <p>Access to cloud-based IDEs and development tools. No setup required - start coding immediately with pre-configured environments.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h5>📊 Real-time Progress Tracking</h5>
                    <p>Monitor your learning progress, project completion, and skill development with our advanced tracking system and personalized feedback.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Training;