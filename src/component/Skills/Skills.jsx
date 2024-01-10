import React from "react";
import { FaHtml5 } from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {DiJsBadge} from "react-icons/di";
import { FaPython} from "react-icons/fa";
import { FaNodeJs} from "react-icons/fa";
import { SiExpress} from "react-icons/si";
import { TbLetterC} from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { GrMysql} from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";


function Skills(){
    return (
        <section id="skills" className="text-center mt-40">
        <h5 className="opacity-80" data-aos="flip-down" >What Skills I have</h5>
        <h3 data-aos="flip-down" className="mb-20 text-3xl bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text" >Technical Skills</h3>
        <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        <div className="md:container py-10 mx-auto text-center rounded-3xl bg-[#120024e1]" >
        <h2 className="my-9  text-3xl bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text">Programming Language</h2>
                <div className="grid grid-flow-row grid-cols-2 grid-rows-6 gap-y-12 gap-x-4 px-10">
                        <article className="grid  grid-cols-3 md:grid-cols-6">
                            <div className="md:col-start-3">
                        <FaHtml5 className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>HTML 5</h4>
                            <h5 className="opacity-80 text-base">Experience</h5>
                        
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <FaCss3 className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Css</h4>
                            <h5 className="opacity-80 text-base">Experience</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <DiJsBadge className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Javascript</h4>
                            <h5 className="opacity-80 text-base">Experience</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <SiJquery className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Jquery</h4>
                            <h5 className="opacity-80 text-base">Intermediate</h5>
                        </div>
                        </article>


                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <FaNodeJs className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>NodeJS</h4>
                            <h5 className="opacity-80 text-base">Intermediate</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <SiExpress className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Express</h4>
                            <h5 className="opacity-80 text-base">Beginner</h5>
                        </div>
                        </article>
                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <TbLetterC className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>C</h4>
                            <h5 className="opacity-80 text-base">Experience</h5>
                        </div>
                        </article>
                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <FaPython className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Python</h4>
                            <h5 className="opacity-80 text-base">Experience</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <GrMysql className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Mysql</h4>
                            <h5 className="opacity-80" >Experience</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <SiMongodb className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>MongoDB</h4>
                            <h5 className="opacity-80" >Intermediate</h5>
                        </div>
                        </article>

                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <SiDjango className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Django</h4>
                            <h5 className="opacity-80 text-base">Beginner</h5>
                        </div>
                        </article>
                        <article className="grid  grid-cols-3 md:grid-cols-6">
                        <div className="md:col-start-3">
                        <SiTailwindcss className="text-4xl md:text-5xl text-iconcolor" /></div>
                        <div className="col-span-2">
                            <h4>Tailwind CSS</h4>
                            <h5 className="opacity-80 text-base">Beginner</h5>
                        </div>
                        </article>
                </div>
        </div>
        </div>
        </section>
    )
}

export default Skills;