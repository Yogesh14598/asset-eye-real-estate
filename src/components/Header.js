import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();  // Get the current location

  // Function to determine if the current path is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''; // Return 'active' if the path matches
  };

  useEffect(() => {
   setTimeout(() => {
     setShowLogin(true)
   }, 5000);
  
  }, [])
  

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="50px"
              width={"90px"}
              alt="Asset Eye Logo"
              style={{ marginRight: "10px" }}
            />
            Asset Eye
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto" style={{ gap: "30px" }}>
              <Nav.Link as={Link} to="/" className={isActive("/")}>
                Home
              </Nav.Link>
             

                <Nav.Link as={Link} to="/aboutus" className={isActive("/aboutus")}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/villa" className={isActive("/villa")}>
                Villa
              </Nav.Link>
              <Nav.Link as={Link} to="/flat" className={isActive("/flat")}>
                Flat
              </Nav.Link>
              <Nav.Link as={Link} to="/site" className={isActive("/site")}>
                Site
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={isActive("/contact")}>
                Contact
              </Nav.Link>

              <Button
                variant="warning"
                className="btn-animated"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
