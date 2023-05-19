import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { sedat, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");

    return (
        <nav
            className={`${styles.paddingX} w-full flex item-center 
            py-5 fixed top-0 z-20 bg-primary `}
        >

            <div className='w-full flex justify-between items-center 
            max-w-7xl mx-auto'>
                <Link
                    to="/"
                    className='flex item-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={sedat} alt="logo" className='w-9 h-9    
                    object-contain' />
                    <p >Sedat <span>Akdogan</span></p>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;