import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../static/images/logo.png'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (width >= 768) {
            setIsNavOpen(true)
        }
    }, [width]);


    return (
        <nav className='text-white flex justify-between items-center pt-10 w-full font-spacegrotesk z-10'>
            <Link to='/'><img className='h-10 w-10 transition-all duration-700 hover:scale-150' src={logo} alt="logo"/></Link>
            <div className="relative">
                <div className="xs:block md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                    <GiHamburgerMenu className={isNavOpen ? 'hidden' : 'visible text-xl'}/>
                    <AiOutlineClose className={isNavOpen ? 'visible text-xl' : 'hidden'}/>
                </div>
                {
                    isNavOpen &&
                    <ul className={'flex justify-end md:space-x-10 xs:flex-col md:flex-row xs:space-x-0 xs:absolute xs:right-10 md:right-0 top-0 md:relative'}>
                        <Link to='/'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Home</li></Link>
                        <Link to='/projects'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Projects</li></Link>
                        <Link to='/blog'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Blog</li></Link>
                        <Link to='/contact'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Contact</li></Link>
                    </ul>
                }
            </div>

        </nav>
    )
}

export default Navbar;