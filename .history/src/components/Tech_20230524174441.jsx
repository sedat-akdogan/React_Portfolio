import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { slideIn } from "../utils/motion";


const Tech = () => {

    return (
        <div>
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>Get in touch</p>

            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-40 h-40' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </motion.div>
         <motion.div
         variants={slideIn("right", "tween", 0.2, 1)}
         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
     >
         <EarthCanvas />
     </motion.div>
     </div>
    );
};

export default SectionWrapper(Tech, "");