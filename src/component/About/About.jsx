import React from "react";
import "./about.css";
import { Container ,Row, Col } from "react-bootstrap";
import ME from "../../assets/img/about.svg"
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function About(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
       <section className="about" id="about" >
        <h5 data-aos="flip-down" >Get To Know</h5>
        <h3 data-aos="flip-down" >About Me</h3>
        <Container>
            <Row className="align-items-center about_cont">
            <Col  xs={12} md={4} xl={4} className="about_me">
            <img data-aos="fade-up" src={ME} alt="About Image" />
            </Col>
            <Col  xs={12} md={7} xl={7} className="info">
            <p data-aos="fade-up">
            Greetings! 👋 I'm a self-taught <span style={{ color: "#4db5ff" }}>Web Developer</span> graduating in 2023, driven by a relentless passion for crafting digital experiences.<br/><br/>
            Eager to contribute to innovative projects, I combine a solid foundation with an insatiable curiosity for emerging technologies. Let's embark on a journey where I turn ideas into <span style={{ color: "#4db5ff" }}>Dynamic</span>dynamic and <span style={{ color: "#4db5ff" }}>user-centric</span> web solutions.
          </p>
            </Col>
            </Row>
        </Container>
       </section>
    )
}
export default About;