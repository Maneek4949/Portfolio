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
            
              As a recent graduate from the <span style={{ color: "#4db5ff" }}>Department</span> of Electronic's and  Communication Engineering, <span style={{ color: "#4db5ff" }}>ABES Engineering College, Ghaziabad</span>, India.<br /> I was born in Varanasi, Uttar Pradesh.<br /><br />

            I was fortunate enough to know from a young age that I wanted to be an engineer. The engineering way of thinking came naturally to me. What I didn't know was what type of engineer I wanted to be. When push came to shove, I choose Software Engineering.I wish to utilize my skills to do projects. I always look for platforms to develop my skill set and use the same for collaborative development.
          </p>
            </Col>
            </Row>
        </Container>
       </section>
    )
}
export default About;