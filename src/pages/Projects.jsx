import React from 'react'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import inventory from '../static/images/inventory.png'
import library from '../static/images/library.png'
import baboo from '../static/images/baboo.png'
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import smoke from "../static/video/smoke12.mp4"


const Projects = () => {
    return (
        <div className='overflow-scroll'>
            <video className='absolute h-screen w-screen object-cover -z-50' src={smoke} autoPlay loop muted></video>
            <div className='xs:w-full md:container flex flex-col h-screen items-center pl-10 pr-10 mx-auto'>
                <Navbar/>
                <h1 className='flex font-poppins xs:text-5xl md:text-7xl lg:text-8xl xs:mt-36 md:mt-20 transition-all duration-700 hover:scale-105'><BsChevronLeft className='text-slate-500'/><div className='text-blue-400'>/</div> <div className='text-white'>Projects</div><BsChevronRight className='text-slate-500'/></h1>

                <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 flex-wrap pb-20">

                    <Link to='https://inventory.vitaliisili.com' rel='noreferrer' target={'_blank'} className="group h-[30em] w-80 rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)] transition-transform duration-700 hover:scale-105">
                        <img className='h-full w-full object-cover' src={inventory} alt="inventory"/>
                        <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                            <p className='text-white my-auto ml-5 font-bold text-xl'>Inventory Manager</p>
                        </div>
                        <div className=" text-white w-full h-full top-0 -left-full group-hover:left-0 bg-[rgba(0,0,0,0.61)] p-5 backdrop-blur absolute transition-all duration-1000">
                            <div className="text-2xl text-blue-500 font-bold">Inventory Manger</div>
                            <div className="text-xl text-blue-500 font-bold mt-10">Technology:</div>
                            <div className="flex flex-wrap">
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Python</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>FastApi</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>JavaScript</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>ReactJs</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>PostgreSQL</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>HTML</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>CSS</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Docker</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Jenkins</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Linux</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Nginx</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Gunicorn</span>
                            </div>
                        </div>
                    </Link>

                    <Link to='https://library.vitaliisili.comm' rel='noreferrer' target={'_blank'} className="group h-[30em] w-80 rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)] transition-transform duration-700 hover:scale-105">
                        <img className='h-full w-full object-cover' src={library} alt="inventory"/>
                        <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                            <p className='text-white my-auto ml-5 font-bold text-xl'>Library Management</p>
                        </div>
                        <div className="text-white w-full h-full top-0 -left-full group-hover:left-0 bg-[rgba(0,0,0,0.61)] p-5 backdrop-blur absolute transition-all duration-1000">
                            <div className="text-2xl text-blue-500 font-bold">Library Management</div>
                            <div className="text-xl text-blue-500 font-bold mt-10">Technology:</div>
                            <div className="flex flex-wrap">
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Python</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Django</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Django Template</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>CSS</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>HTML</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>JavaScript</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>PostgreSQL</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Jenkins</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Nginx</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Linux</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Docker</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Gunicorn</span>
                            </div>
                        </div>
                    </Link>

                    <Link to='https://github.com/vitaliisili/dice_game_python' rel='noreferrer' target={'_blank'} className="group h-[30em] w-80 rounded-lg overflow-hidden relative hover:cursor-pointer hover:shadow-[-3px_10px_23px_0.36px_rgba(100,116,139,0.20)] transition-transform duration-700 hover:scale-105">
                        <img className='h-full w-full object-cover' src={baboo} alt="inventory"/>
                        <div className="absolute flex w-full h-28 bottom-0 backdrop-blur-sm">
                            <p className='text-white my-auto ml-5 font-bold text-xl'>Baboo Dice Game</p>
                        </div>
                        <div className=" text-white w-full h-full top-0 -left-full group-hover:left-0 bg-[rgba(0,0,0,0.61)] p-5 backdrop-blur absolute transition-all duration-1000">
                            <div className="text-2xl text-blue-500 font-bold">Baboo Dice Game</div>
                            <div className="text-xl text-blue-500 font-bold mt-10">Technology:</div>
                            <div className="flex flex-wrap">
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Python</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>PyPi</span>
                                <span className='mr-2 mt-2 bg-blue-500 rounded-2xl pl-4 pr-4'>Colorama</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Projects;