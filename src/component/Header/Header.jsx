import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './header.css'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/gmail.svg';
import navIcon3 from '../../assets/img/github.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

function Header () {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            Manoj Prajapati
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === '#' ? 'active' : 'notActive'} onClick={() => onUpdateActiveLink('#')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active' : 'notActive'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : 'notActive'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active' : 'notActive'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active' : 'notActive'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=manojprajapati1208@gmail.com&tf=cm"><img src={navIcon2}></img></a>
                <a href="https://www.linkedin.com/in/man0j-prajapati/"><img src={navIcon1}></img></a>
                
                <a href="https://github.com/Maneek4949/"><img src={navIcon3}></img></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default Header;