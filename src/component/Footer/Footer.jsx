import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-footerbg p-12 text-center mt-28 overflow-hidden" data-aos="zoom-in-up" data-aos-duration="1000">
      <h2 className='text-purple-600'>Manoj Prajapati</h2>
      <div className='mb-16 opacity-80'>
        <small>THE DOER, THE DREAMER & THE DEVELOPER</small>
      </div>
      <ul className='p-0 flex-col flex md:flex-row justify-center gap-6 md:gap-8 text-lg md:text-xl text-purple-600 mb-4'>
        <li><a className="text-purple-600 no-underline " href='#'>Home</a></li>
        <li><a className="text-purple-600 no-underline " href='#about'>About</a></li>
        <li><a className="text-purple-600 no-underline " href='#skills'>Skills</a></li>
        <li><a className="text-purple-600 no-underline " href='#project'>Projects</a></li>
        <li><a className="text-purple-600 no-underline " href='#contact'>Contact</a></li>
      </ul>
      <div className='text-lg flex justify-center gap-4 mb-6'>
        <a className="text-white p-3 rounded-xl border-x border-y border-solid border-transparent hover:border-purple-100 hover:text-white" href='https://www.linkedin.com/in/man0j-prajapati/'><GrLinkedinOption/></a>
        <a className="text-white p-3 rounded-xl border-x border-y border-solid border-transparent hover:border-purple-100 hover:text-white" href='mailto:manojprajapati1208@gmail.com'><IoIosMail/></a>
        <a className="text-white p-3 rounded-xl border-x border-y border-solid border-transparent hover:border-purple-100 hover:text-white" href='https://github.com/Maneek4949'><FaGithub/></a>
      </div>
      <div className='mb-4'>
        <small>&copy; Manoj Prajapati - 2023</small>
      </div>
    </footer>
  )
}

export default Footer
