import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/">News Monkey</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/business">Business</Link>
      <Link className='nav-link' to="/entertainment">Entertainment</Link>
      <Link className='nav-link' to="/general">General</Link>
      <Link className='nav-link' to="/health">Health</Link>
      <Link className='nav-link' to="/science">Science</Link>
      <Link className='nav-link' to="/sports">Sports</Link>
      <Link className='nav-link' to="/technology">Technology</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
  </>
  )
}

export default Navbar2