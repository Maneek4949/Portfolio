import React from "react";
import { Container ,Row,Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ac from "../../assets/img/AiContent.png"
import ichat from "../../assets/img/ichat.png"
import docbot from "../../assets/img/docbot.png"
import study from "../../assets/img/study24.png"
import weather from "../../assets/img/waether.png"
import keeper from "../../assets/img/keeper.png"
import sef from "../../assets/img/sef.png"
import "./project.css"


function Project(){
    const projects=[
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

    {
        title:"Student Enrollment Form",
        imgUrl:sef,
        github:"https://github.com/Maneek4949/Student-Enrollment-Form",
        live:"https://github.com/Maneek4949/Student-Enrollment-Form",
    },
    {   title:"Study 24x7",
        imgUrl: study,
        github:"https://github.com/Maneek4949/Study24x7",
        live:"https://maneek4949.github.io/Study24x7/",
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
        <section className="project" id="project">
                
        <h5 data-aos="flip-down" >My Rescent Works</h5>
        <h3 data-aos="flip-down" >Technical Skills</h3>
                <Container>
                <Row >
                {projects.map((project, index)=>{
                    return (
                <ProjectCard 
                key={index}
                {...project}
                />)
                })}
</Row></Container>
        </section>
    )
}

export default Project;
