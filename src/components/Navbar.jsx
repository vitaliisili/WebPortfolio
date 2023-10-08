import React from 'react';
import {Link} from "react-router-dom";
import logo from '../static/images/logo.png'

const Navbar = () => {
    return (
        <nav className='text-white flex justify-between items-center pt-10 w-full font-spacegrotesk z-10'>
            <img className='h-10 w-10 transition-all duration-700 hover:scale-150' src={logo} alt="logo"/>
            <ul className='flex justify-end space-x-10'>
                <Link to='/'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Home</li></Link>
                <Link to='/projects'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Projects</li></Link>
                <Link to='/blog'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Blog</li></Link>
                <Link to='/contact'><li className='text-[20px] hover:text-[#6dc3e5] transition hover:duration-200 hover:drop-shadow-[0_10px_10px_rgba(116,207,242,0.9)] hover:scale-110'>Contact</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;