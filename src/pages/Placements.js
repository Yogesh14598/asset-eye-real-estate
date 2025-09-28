import React from "react";
import { Container, Row, Col, Card, Badge, Table } from "react-bootstrap";
import { motion } from "framer-motion";

const Placements = () => {
  const placementStats = [
    { company: "TCS", students: 250, avgPackage: "4.2 LPA" },
    { company: "Infosys", students: 180, avgPackage: "5.1 LPA" },
    { company: "Wipro", students: 145, avgPackage: "4.8 LPA" },
    { company: "Accenture", students: 120, avgPackage: "6.2 LPA" },
    { company: "Tech Mahindra", students: 95, avgPackage: "4.5 LPA" },
    { company: "Cognizant", students: 88, avgPackage: "5.0 LPA" },
    { company: "IBM", students: 65, avgPackage: "7.2 LPA" },
    { company: "Amazon", students: 32, avgPackage: "12.5 LPA" },
    { company: "Microsoft", students: 18, avgPackage: "18.2 LPA" },
    { company: "Google", students: 12, avgPackage: "25.0 LPA" }
  ];

  const studentSuccess = [
    {
      name: "Rajesh Kumar",
      course: "Full Stack Development",
      company: "Amazon",
      package: "12.5 LPA",
      background: "Mechanical Engineer",
      story: "From mechanical engineer to software developer in 6 months!"
    },
    {
      name: "Priya Sharma",
      course: "Data Science",
      company: "Microsoft",
      package: "15.2 LPA",
      background: "12 years career gap",
      story: "Successfully returned to tech after career break"
    },
    {
      name: "Arun Patel",
      course: "Python & ML",
      company: "TCS",
      package: "6.8 LPA",
      background: "Non-IT Background",
      story: "First job in IT sector with excellent package"
    },
    {
      name: "Sneha Reddy",
      course: "Java Development",
      company: "Infosys",
      package: "5.5 LPA",
      background: "B.E Fresher",
      story: "Direct placement after course completion"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="placements-hero py-5 bg-dark text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="display-4 mb-3">Placement Records</h1>
            <p className="lead">
              4000+ Students Successfully Placed in Top Companies
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning display-4">4000+</h2>
                <p className="lead">Students Placed</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning display-4">200+</h2>
                <p className="lead">Partner Companies</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning display-4">95%</h2>
                <p className="lead">Placement Rate</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning display-4">25 LPA</h2>
                <p className="lead">Highest Package</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Placement Stats */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5">Top Hiring Partners</h2>
            <div className="table-responsive">
              <Table striped bordered hover className="table-placement">
                <thead className="table-dark">
                  <tr>
                    <th>Company</th>
                    <th>Students Placed</th>
                    <th>Average Package</th>
                  </tr>
                </thead>
                <tbody>
                  {placementStats.map((company, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <td><strong>{company.company}</strong></td>
                      <td>{company.students}</td>
                      <td className="text-success"><strong>{company.avgPackage}</strong></td>
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Student Success Stories */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Student Success Stories</h2>
          <Row>
            {studentSuccess.map((student, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="card-title">{student.name}</h5>
                        <Badge bg="success">{student.package}</Badge>
                      </div>
                      <p className="mb-2">
                        <strong>Course:</strong> {student.course}
                      </p>
                      <p className="mb-2">
                        <strong>Company:</strong> {student.company}
                      </p>
                      <p className="mb-2">
                        <strong>Background:</strong> {student.background}
                      </p>
                      <p className="text-muted fst-italic">
                        "{student.story}"
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Placement Process */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5">Our Placement Process</h2>
            <Row className="text-center">
              <Col md={3} className="mb-4">
                <div className="placement-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    1
                  </div>
                  <h5>Course Completion</h5>
                  <p>Complete your chosen course with hands-on projects and assessments</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="placement-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    2
                  </div>
                  <h5>Resume Building</h5>
                  <p>Professional resume preparation and portfolio development</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="placement-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    3
                  </div>
                  <h5>Interview Preparation</h5>
                  <p>Mock interviews, technical and HR round preparation</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="placement-step">
                  <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    4
                  </div>
                  <h5>Job Placement</h5>
                  <p>Direct placement in our partner companies with competitive packages</p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Placements;