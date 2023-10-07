import React from 'react';
import {Link} from "react-router-dom";
import logo from '../static/images/logo.png'

const Navbar = () => {
    return (
        <nav className='text-white flex justify-between items-center mt-10 w-full font-spacegrotesk'>
            <img className='h-10 w-10' src={logo} alt="logo"/>
            <ul className='flex justify-end space-x-10'>

                <Link to='/'>
                    <li className='text-[20px] hover:text-white'>Home</li>
                </Link>

                <Link to='/projects'>
                    <li className='text-[20px] hover:text-white'>Projects</li>
                </Link>

                <Link to='/contact'>
                    <li className='text-[20px] hover:text-white'>Contact</li>
                </Link>

            </ul>
        </nav>
    );
};

export default Navbar;