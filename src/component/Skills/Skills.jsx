import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {DiJsBadge} from "react-icons/di";
import { FaPython} from "react-icons/fa";
import { FaNodeJs} from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
import { TbLetterC} from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { GrMysql} from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import {FaJava} from "react-icons/fa";


import "./Skills.css";




function Skills(){
    return (
        <section id="skills">
        <h5 data-aos="flip-down" >What Skills I have</h5>
        <h3 data-aos="flip-down" >Technical Skills</h3>
        <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        <Container className="skill_box" >
                <span><FaCode className="skill_icon1" /><h2>Programming Language</h2></span>
                <Row>
                    <Col xs={5} md={5} xl={5}>
                        <article className="skill_card">
                            <div className="skill_text">
                        <FaHtml5 className="skill_icon" />
                        <div>
                            <h4>HTML 5</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <FaCss3 className="skill_icon" />
                        <div>
                            <h4>Css</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <DiJsBadge className="skill_icon" />
                        <div>
                            <h4>Javascript</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <SiJquery className="skill_icon" />
                        <div>
                            <h4>Jquery</h4>
                            <h5>Intermediate</h5>
                        </div>
                        </div>
                        </article>


                        <article className="skill_card">
                        <div className="skill_text">
                        <FaNodeJs className="skill_icon" />
                        <div>
                            <h4>NodeJS</h4>
                            <h5>Intermediate</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <SiExpress className="skill_icon" />
                        <div>
                            <h4>Express</h4>
                            <h5>Beginner</h5>
                        </div>
                        </div>
                        </article>
                    </Col>
                    <Col xs={5} md={5} xl={5}><article className="skill_card">
                        <div className="skill_text">
                        <TbLetterC className="skill_icon" />
                        <div>
                            <h4>C</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <FaPython className="skill_icon" />
                        <div>
                            <h4>Python</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <GrMysql className="skill_icon" />
                        <div>
                            <h4>Mysql</h4>
                            <h5>Experience</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <SiMongodb className="skill_icon" />
                        <div>
                            <h4>MongoDB</h4>
                            <h5>Intermediate</h5>
                        </div>
                        </div>
                        </article>

                        <article className="skill_card">
                        <div className="skill_text">
                        <FaJava className="skill_icon" />
                        <div>
                            <h4>Java</h4>
                            <h5>Beginner</h5>
                        </div>
                        </div>
                        </article>


                    </Col>
                </Row>
        </Container>
        </div>
        </section>
    )
}

export default Skills;