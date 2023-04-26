import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container ,Row,Col} from "react-bootstrap";
import "./contact.css";
import { GoMail } from "react-icons/go";
import {  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3skg6is', 'template_azhf118', form.current, 'yPaGcjeWpHKgJBMxY')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section data-aos="zoom-in-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000" id="contact">
      <h5  >Get To Touch</h5>
      <h3  >Contact Me</h3>
    <Container>
      <Row className='contact_box'>
        <Col xs={12} md={5} xl={5}>
          <article className='social'>
            <GoMail className='s_icon' />
            <p>Email</p>
            <p>manojprajapati1208@gmail.com</p>
            <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=manojprajapati1208@gmail.com&body=This%20is%20mail%20body&su=THIS%20IS%20MAIL%20SUBJECT"> Send a message</a>
          </article>
          <article className='social'>
            <FaLinkedin className='s_icon' />
            <p>LinkedIn</p>
            <p>manoj prajapati</p>
            <a href="https://www.linkedin.com/in/man0j-prajapati/">Send a message</a>
          </article>
          <article className='social'>
            <FaInstagram className='s_icon' />
            <p>Intagram</p>
            <p>man0j__prajapati </p>
            <a href="https://www.instagram.com/man0j__prajapati/">Send a message</a>
          </article>
        </Col>
      <Col xs={12} md={6} xl={6}>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Full Name' />
      <input type="text" name="subject" placeholder='Subject' />
      <input type="email" name="user_email" placeholder='Email'/>
      <textarea name="message" placeholder='Message' />
      <input type="submit" value="Send" className='c_btn' />
    </form>
    </Col>
    </Row>
    </Container>
    </section>
  );
};

export default Contact;