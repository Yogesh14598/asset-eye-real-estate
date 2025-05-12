import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "#1e1e1e",
            border: "2px solid #f5b700",
            color: "#f5b700",
          }}
          className="btn-animated"
          onClick={onHide}
        >
          Close
        </Button>
        <Button variant="warning" className="btn-animated">
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
