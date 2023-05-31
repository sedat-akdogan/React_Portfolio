import React from "react";
import { motion } from "framer-motion";
import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "");