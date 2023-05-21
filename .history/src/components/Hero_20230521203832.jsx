import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className='`${styles.paddingX} absolute inset-0 top-[120] max-w-7lx mx-auto flex- 
                flex-row items-start gap-5`'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-40 h-80 violet-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span 
                        className='text-[#915eff]'>Sedat</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develope user interfces <br className='sm:hidden block'/> and web 
                        applications
                    </p>
                </div>
            </div>
            <v/>
        </section>
    );
}

export default Hero;