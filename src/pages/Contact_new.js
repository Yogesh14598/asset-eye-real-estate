import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Card, ButtonGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMail } from "./sendMail";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const courseRef = useRef();
  const experienceRef = useRef();
  const joiningDateRef = useRef();

  const [trainingMode, setTrainingMode] = useState('');

  const courses = [
    "MERN Stack", "MEAN Stack", "HTML CSS Bootstrap", "JavaScript TypeScript", 
    "Node.js", "SQL", "MongoDB", "Power BI", "Excel & Advanced Excel", 
    "Tableau", "Python", "Manual Testing", "Selenium Automation", 
    "Cypress Testing", "Aptitude", "DSA & Algorithms", "Coding Problems", 
    "Resume Preparation", "Mock Interviews"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();
    const course = courseRef.current.value;
    const experience = experienceRef.current.value;
    const joiningDate = joiningDateRef.current.value;

    if (!name || !email || !phone || !trainingMode || !course || !experience) {
      toast.error("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const formData = {
      name,
      email,
      phoneNumber: phone,
      message: `Training Mode: ${trainingMode}\nCourse: ${course}\nExperience: ${experience}\nPreferred Joining Date: ${joiningDate}\n\nMessage: ${message}`,
      subject: "New Course Enquiry - Code2Dream",
    };

    try {
      await sendMail(formData);
      toast.success("Enquiry sent successfully! We'll contact you soon.");
      // Reset form
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      courseRef.current.value = "";
      experienceRef.current.value = "";
      joiningDateRef.current.value = "";
      setTrainingMode('');
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
      console.error(error);
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #111, #1a1a1a)",
        padding: "60px 0",
        color: "#fff",
      }}
    >
      <ToastContainer />
      <Container>
        <h2 className="text-center mb-5" style={{ color: "#ffc107" }}>
          Contact Code2Dream Institute
        </h2>
        
        {/* Contact Info Section */}
        <Row className="mb-5">
          <Col md={3} className="mb-4">
            <Card style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
              <Card.Body className="text-center">
                <div className="mb-3" style={{ fontSize: "3rem" }}>📍</div>
                <h5 style={{ color: "#ffc107" }}>Our Location</h5>
                <p style={{ color: "#ccc" }}>
                  #129 Rajeevgandhi Nagar,<br />
                  Laggere, Bangalore - 560058<br />
                  <small>(Only Bangalore Branch)</small>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
              <Card.Body className="text-center">
                <div className="mb-3" style={{ fontSize: "3rem" }}>📞</div>
                <h5 style={{ color: "#ffc107" }}>Call Us</h5>
                <p style={{ color: "#ccc" }}>
                  +91 9538802191<br />
                  +91 9620044797<br />
                  +91 9986740534<br />
                  Mon-Sun: 9AM-10PM
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
              <Card.Body className="text-center">
                <div className="mb-3" style={{ fontSize: "3rem" }}>✉️</div>
                <h5 style={{ color: "#ffc107" }}>Email Us</h5>
                <p style={{ color: "#ccc" }}>
                  code2dream@gmail.com<br />
                  admissions@code2dream.com<br />
                  hr@code2dream.com
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
              <Card.Body className="text-center">
                <div className="mb-3" style={{ fontSize: "3rem" }}>🏆</div>
                <h5 style={{ color: "#ffc107" }}>Our Success</h5>
                <p style={{ color: "#ccc" }}>
                  Started: 2025<br />
                  10+ Students Placed<br />
                  100% Job Guarantee
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card
              style={{
                backgroundColor: "#222",
                border: "1px solid #333",
                borderRadius: "12px",
              }}
            >
              <Card.Body>
                <h4 className="text-center mb-4" style={{ color: "#ffc107" }}>
                  Course Enquiry Form
                </h4>
                
                <Form onSubmit={handleSubmit}>
                  {/* Training Mode Selection */}
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Training Mode *</Form.Label>
                    <div>
                      <ButtonGroup className="w-100">
                        <Button
                          variant={trainingMode === 'online' ? 'warning' : 'outline-warning'}
                          onClick={() => setTrainingMode('online')}
                          type="button"
                        >
                          💻 Online
                        </Button>
                        <Button
                          variant={trainingMode === 'offline' ? 'warning' : 'outline-warning'}
                          onClick={() => setTrainingMode('offline')}
                          type="button"
                        >
                          🏫 Offline
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formName" className="mb-4">
                        <Form.Label style={{ color: "#fff" }}>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          ref={nameRef}
                          style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formPhone" className="mb-4">
                        <Form.Label style={{ color: "#fff" }}>Your Ph. Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Your Mobile Number"
                          ref={phoneRef}
                          style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Email ID *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your Email ID"
                      ref={emailRef}
                      style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formExperience" className="mb-4">
                        <Form.Label style={{ color: "#fff" }}>Fresher / Experienced *</Form.Label>
                        <Form.Select
                          ref={experienceRef}
                          style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                        >
                          <option value="">Select Experience</option>
                          <option value="Fresher">Fresher</option>
                          <option value="0-1 years">0-1 years experience</option>
                          <option value="1-3 years">1-3 years experience</option>
                          <option value="3-5 years">3-5 years experience</option>
                          <option value="5+ years">5+ years experience</option>
                          <option value="Career Gap">Career Gap (Returning to work)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formCourse" className="mb-4">
                        <Form.Label style={{ color: "#fff" }}>Select Course *</Form.Label>
                        <Form.Select
                          ref={courseRef}
                          style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                        >
                          <option value="">Choose Course</option>
                          {courses.map((course, index) => (
                            <option key={index} value={course}>
                              {course}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formJoiningDate" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Preferred Joining Date</Form.Label>
                    <Form.Control
                      type="date"
                      ref={joiningDateRef}
                      style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Message/Additional Requirements</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell us about your career goals, specific requirements, or any questions..."
                      ref={messageRef}
                      style={{ backgroundColor: "#333", color: "#fff", border: "1px solid #555" }}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="warning"
                      type="submit"
                      size="lg"
                      className="btn-animated"
                    >
                      Submit Enquiry & Get Course Information
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-5">
          <Col className="text-center">
            <h4 style={{ color: "#ffc107" }}>Why Contact Us?</h4>
            <Row className="mt-4">
              <Col md={3} className="mb-3">
                <p style={{ color: "#ccc" }}>
                  <strong>🆓 Free Demo Session</strong><br />
                  Attend demo before enrollment
                </p>
              </Col>
              <Col md={3} className="mb-3">
                <p style={{ color: "#ccc" }}>
                  <strong>📋 Course Details</strong><br />
                  Complete curriculum & structure
                </p>
              </Col>
              <Col md={3} className="mb-3">
                <p style={{ color: "#ccc" }}>
                  <strong>💼 Placement Info</strong><br />
                  100% job guarantee details
                </p>
              </Col>
              <Col md={3} className="mb-3">
                <p style={{ color: "#ccc" }}>
                  <strong>💰 Flexible Payment</strong><br />
                  30% upfront, rest as per progress
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Job Guarantee Banner */}
        <Row className="mt-5">
          <Col>
            <Card style={{ backgroundColor: "#ffc107", color: "#000", borderRadius: "12px" }}>
              <Card.Body className="text-center">
                <h4 className="mb-3">🎯 We Offer 100% Job Guarantee Courses</h4>
                <p className="mb-2">
                  <strong>Any Degree / Diploma Candidates / Year GAP / Non-IT / Any Passed Outs Welcome!</strong>
                </p>
                <div className="mt-3">
                  <small>
                    📞 For all inquiries: +91 9538802191<br />
                    � Email: code2dream@gmail.com
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;