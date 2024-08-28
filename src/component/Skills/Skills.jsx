import React from "react";
import SkillCircle from "./SkillCircle";
import { InnerIcons, OuterIcons } from '../../skillIcons';

function Skills() {
    return (
        <section data-aos="zoom-in" id="skills" className="relative text-center mt-40">
            <div className="absolute left-[calc(50%-150px)] top-56 ">
                <h5 className="opacity-80 " >What Skills I have</h5>
                <h3 className="bg-gradient-to-r from-hpink to-indigo-800 text-transparent bg-clip-text" >Technical Skills</h3>
                <span className="w-80 inline-block">Transforming ideas into reality with cutting-edge skills in web development, AI, and cloud technology</span>
            </div>
            <div className="relative grid min-h-[700px] place-items-center overflow-hidden after:content-[''] after:w-full after:h-[350px] after:bg-gradient-to-b after:from-transparent after:via-allbg after:to-allbg  after:z-10 after:bottom-0 after:absolute">

                {Object.entries(InnerIcons).map(([key, IconComponent], index) => (
                    <SkillCircle
                        className="size-[44px]"
                        key={index}
                        duration={90}
                        delay={index * 11}
                        radius={200}
                    >
                        <IconComponent />
                    </SkillCircle>
                ))}

                {Object.entries(OuterIcons).map(([key, IconComponent], index) => (
                    <SkillCircle
                        className="size-[44px]"
                        key={index}
                        duration={90}
                        delay={index * 8.8}
                        radius={300}
                        reverse
                    >
                        <IconComponent />
                    </SkillCircle>
                ))}

            </div>
        </section>
    )
}

export default Skills;