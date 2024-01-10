import React from "react";
import ME from "../../assets/img/about.svg"
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
       <section className="text-center mt-48" id="about" >
        <h5 data-aos="flip-down" >Get To Know</h5>
        <h3 data-aos="flip-down" className="mb-20 text-3xl bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text" >About Me</h3>
        <div className="container mx-auto">
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
            <div  className="col-span-2">
            <img src={ME} alt="About" />
            </div>
            <div  className="col-span-3  flex items-center">
            <p className="text-xl opacity-80">
            Greetings! 👋 I'm a self-taught <span className="text-fuchsia-700 opacity-100">Full Stack Developer</span> graduating in 2023, driven by a relentless passion for crafting digital experiences.<br/><br/>
            Eager to contribute to innovative projects, I combine a solid foundation with an insatiable curiosity for emerging technologies. Let's embark on a journey where I turn ideas into <span className="text-fuchsia-700 opacity-100">Dynamic</span> and <span className="text-fuchsia-700 opacity-100">user-centric</span> web solutions.
          </p>
            </div>
            </div>
        </div>
       </section>
    )
}
export default About;