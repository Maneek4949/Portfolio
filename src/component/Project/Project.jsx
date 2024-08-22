import React from "react";
import ProjectCard from "./ProjectCard";
import movieApi from "../../assets/img/movieApi.png"
import ichat from "../../assets/img/ichat.png"
import docbot from "../../assets/img/docbot.png"
import blog from "../../assets/img/vlog.png"
import weather from "../../assets/img/waether.png"
import keeper from "../../assets/img/keeper.png"


function Project(){
    const projects=[
        {
            title:"Blog App",
            imgUrl: blog,
            github:"https://github.com/Maneek4949/Blog",
            live:"https://github.com/Maneek4949/Blog",
           }, 
       {
        title:"Movie Search",
        imgUrl: movieApi,
        github:"https://github.com/Maneek4949/movie-search",
        live:"https://jolly-sunshine-ddfe8b.netlify.app/",
       }, 
    {
        title:"iChat",
        imgUrl: ichat,
        github:"https://github.com/Maneek4949/iChatApp",
        live:"https://github.com/Maneek4949/iChatApp",
    },
    {   title:"DocBot",
        imgUrl: docbot,
        github:"https://github.com/Maneek4949/f_docbot",
        live:"https://github.com/Maneek4949/f_docbot",
    },
    {   title:"Weather App",
        imgUrl: weather,
        github:"https://github.com/Maneek4949/weather-app",
        live:"https://maneek4949.github.io/weather-app/"
    },
    {   title:"Keeper App",
        imgUrl: keeper,
        github:"https://github.com/Maneek4949/Keeper-App",
        live:"https://github.com/Maneek4949/Keeper-App",
    },

]
    return(
        <section className="text-center mt-40" id="projects">
                <h5 className="opacity-80" data-aos="flip-down" >My Recent Works</h5>
                <h3 data-aos="flip-down" className="mb-20 text-3xl bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text" >Projects</h3>
                <div className="container" >
                    <div className="md:grid md:grid-cols-3 md:gap-x-4 gap-y-12 grid grid-rows-1">
                        {projects.map((project, index)=>{
                            return (
                        <ProjectCard key={index} {...project}/>)
                        })}
                    </div>
                </div>
        </section>
    )
}

export default Project;