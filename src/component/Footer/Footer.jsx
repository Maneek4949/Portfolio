import React from 'react'
import "./footer.css"
import { FaFacebookF,FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer data-aos="zoom-in-up" data-aos-duration="1000">
      <a href='#' className='footer__logo'>Manoj Prajapati</a>
      <div className='sub-text'>
        <small>Student at ABES Engineering College, India</small>
      </div>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/man0j-prajapati/' target='_blank' rel="noreferrer"><GrLinkedinOption/></a>
        <a href='https://github.com/Maneek4949' target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/man0j__prajapati/' target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href='https://www.facebook.com/manoj.prajapati' target='_blank' rel="noreferrer"><FaFacebookF/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Manoj Prajapati - 2023</small>
      </div>
    </footer>
  )
}

export default Footer
