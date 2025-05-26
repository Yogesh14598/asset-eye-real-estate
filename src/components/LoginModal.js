import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { sendMail } from "../pages/sendMail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = ({ show, onHide }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = async () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
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
      subject: "New Signup",
      message: `User signed up:\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}`,
    };

    try {
      await sendMail(formData);
      onHide();
    } catch (error) {
      console.error(error);
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="mt-3">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                ref={phoneRef}
              />
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
          <Button
            variant="warning"
            className="btn-animated"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
