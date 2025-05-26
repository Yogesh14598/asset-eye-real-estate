import React, { useRef } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMail } from "./sendMail";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    const phoneNumber = phoneRef.current.value.trim();

    if (!name || !email || !phoneNumber) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const formData = {
      name,
      email,
      phoneNumber,
      message,
      subject: "New Contact Message",
    };

    try {
      await sendMail(formData);
      toast.success("Message sent successfully!");
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
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
          Get In Touch
        </h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              style={{
                backgroundColor: "#222",
                border: "1px solid #333",
                borderRadius: "12px",
              }}
            >
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your phone number"
                      ref={phoneRef}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label style={{ color: "#fff" }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      ref={messageRef}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="warning"
                      type="submit"
                      className="btn-animated"
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
