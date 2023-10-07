import React from 'react';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import inventory from '../static/images/inventory.png'
import library from '../static/images/library.png'
import synology from '../static/images/synology.png'
import baboo from '../static/images/baboo.png'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
const Projects = () => {
    return (
        <div className='container flex flex-col h-screen items-center pl-10 pr-10'>
            <Navbar/>
            <h1 className='flex font-poppins text-7xl lg:text-8xl mt-20'><BsChevronLeft className='text-slate-500'/><div className='text-pink-600'>/</div> <div className='text-white'>Projects</div><BsChevronRight className='text-slate-500'/></h1>

            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 flex-wrap pb-20">

                <Link to='https://inventory.vitaliisili.com' rel='noreferrer' target={'_blank'} className="transition-shadow duration-200 h-[30em] w-80 border-0 border-lg rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)]">
                    <img className='h-full w-full object-cover' src={inventory} alt="inventory"/>
                    <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                        <p className='text-white my-auto ml-5 font-bold text-xl'>Inventory Manager</p>
                    </div>
                </Link>

                <Link to='https://library.vitaliisili.com' rel='noreferrer' target={'_blank'} className="transition-shadow duration-200 h-[30em] w-80 border-0 border-lg rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)]">
                    <img className='h-full w-full object-cover' src={library} alt="library"/>
                    <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                        <p className='text-white my-auto ml-5 font-bold text-xl'>Library Management</p>
                    </div>
                </Link>

                <Link to='https://github.com/vitaliisili/dice_game_python' rel='noreferrer' target={'_blank'} className="transition-shadow duration-200 h-[30em] w-80 border-0 border-lg rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)]">
                    <img className='h-full w-full object-cover' src={baboo} alt="synology"/>
                    <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                        <p className='text-white my-auto ml-5 font-bold text-xl'>Baboo Dice Game</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;