import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Andre Merchant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/users'>Users</Link></Nav.Link>
            <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary' className="me-2">Log In</Button>
            <Button variant='primary'>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
