import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section style={{ background: 'linear-gradient(to bottom, #111, #1a1a1a)', padding: '60px 0', color: '#fff' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#ffc107' }}>Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '12px' }}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formName" className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="warning" type="submit" className="btn-animated">
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