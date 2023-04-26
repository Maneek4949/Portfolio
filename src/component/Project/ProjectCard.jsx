import React from "react";
import {Col,Button} from "react-bootstrap"

import { BsGithub } from "react-icons/bs";

function ProjectCard({title,imgUrl,github,live}){
    console.log(imgUrl)
    return(<Col sm={6} md={4}>
        <div data-aos="zoom-in" className="project_Card">
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <h4>{title}</h4>
            <div className="project_btn">
            <a href={github} target={'_blank'}><Button><BsGithub/> GitHub</Button></a>
            <a href={live}target={'_blank'}><Button>Live Demo</Button></a>
            
            
            </div>
        </div>
        </div>
    </Col>)
}

export default ProjectCard;