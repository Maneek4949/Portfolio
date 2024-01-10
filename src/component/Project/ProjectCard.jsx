import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCard({title,imgUrl,github,live}){
    return(
        <div data-aos="zoom-in" className="text-left rounded-3xl p-4 bg-gradient-to-r from-probg1 to-probg2 opacity-60">
        <div className="">
            <img src={imgUrl} alt="projectImg"/>
            <h4 className="py-3">{title}</h4>
            <div className="d-flex gap-x-4">
            <a className="bg-[#9d00f8] py-1.5 px-2 rounded d-flex gap-x-3 text-white no-underline transition duration-300 ease-in-out transform motion-safe:hover:scale-110" href={github}><BsGithub/>GitHub</a>
            <a className="bg-[#9d00f8] py-1.5 px-2 rounded text-white no-underline transition duration-300 ease-in-out transform motion-safe:hover:scale-110" href={live}>Live Demo</a>
            </div>
        </div>
    </div>)
}

export default ProjectCard;