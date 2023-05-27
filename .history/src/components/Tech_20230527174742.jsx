import React from "react";

import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { StarsCanvas }

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
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <StarsCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Tech, "");