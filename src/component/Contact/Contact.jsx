import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

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
    <section className="text-center mt-48" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" id="contact">
      <h5 className="opacity-80" data-aos="flip-down" >Get To Touch</h5>
      <h3 data-aos="flip-down" className="mb-20 text-3xl bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text"  >Contact Me</h3>
      <div className="container mx-auto">
      <div className='grid md:grid-cols-9 md:gap-4'>
        <div className='md:col-span-4'>
          <article className='bg-gradient-to-r from-probg1 to-probg2 rounded-2xl border-0 mb-3 py-2.5 flex flex-col items-center hover:from-hpink hover:to-indigo-800'>
            <GoMail className='mb-3 text-2xl' />
            <p>Email</p>
            <p>manojprajapati1208@gmail.com</p>
            <a className="no-underline" href="https://mail.google.com/mail/?view=cm&source=mailto&to=manojprajapati1208@gmail.com&body=This%20is%20mail%20body&su=THIS%20IS%20MAIL%20SUBJECT"> Send a message</a>
          </article>
          <article className='bg-gradient-to-r from-probg1 to-probg2 rounded-2xl border-0 mb-3 py-2.5 flex flex-col items-center hover:from-hpink hover:to-indigo-800'>
            <FaLinkedin className='mb-3 text-2xl' />
            <p>LinkedIn</p>
            <p>manoj prajapati</p>
            <a className="no-underline" href="https://www.linkedin.com/in/man0j-prajapati/">Send a message</a>
          </article>
          <article className='bg-gradient-to-r from-probg1 to-probg2 rounded-2xl border-0 mb-3 py-2.5 flex flex-col items-center hover:from-hpink hover:to-indigo-800'>
            <BsGithub className='mb-3 text-2xl' />
            <p>GitHub</p>
            <p>Maneek4949 </p>
            <a className="no-underline" href="https://github.com/Maneek4949">Send a message</a>
          </article>
        </div>
      <div className='md:col-span-5'>
    <form  className='flex flex-col gap-3' ref={form} onSubmit={sendEmail}>
      <input className=' p-6  rounded-lg bg-inputbg  border-2 border-solid border-purple-900 focus:border-purple-600' type="text" name="from_name" placeholder='Full Name' />
      <input className=' p-6  rounded-lg bg-inputbg  border-2 border-solid border-purple-900 focus:border-purple-600 ' type="text" name="subject" placeholder='Subject' />
      <input className=' p-6  rounded-lg bg-inputbg  border-2 border-solid border-purple-900 focus:border-purple-600' type="email" name="user_email" placeholder='Email'/>
      <textarea className='h-32 p-6  rounded-lg bg-inputbg  border-2 border-solid border-purple-900 focus:border-purple-600' name="message" placeholder='Message' />

      <input type="submit" value="Send" className='p-6  rounded-lg bg-inputbg  border-2 border-solid border-purple-900 hover:bg-purple-800 hover:border-purple-600' />
    </form>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;