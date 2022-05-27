import React from "react";
import { Button, Container, Form, FormControl, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={Logo} alt="logo" className="d-inline-block align-top" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-link"
            style={{ maxHeight: "100px", display: "flex", gap: "15px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <BsSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
