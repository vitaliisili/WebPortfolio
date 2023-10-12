import React from 'react';
import Navbar from "../components/Navbar";
import smoke from "../static/video/smoke9.mp4";
import {FaWhatsapp} from "react-icons/fa";
import {AiFillGithub, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {HiOutlineMapPin} from "react-icons/hi2";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className=''>
            <video className='fixed h-screen w-screen object-cover -z-50' src={smoke} autoPlay loop muted></video>
            <div className='xs:w-full md:container flex flex-col h-screen items-center pl-10 pr-10 mx-auto'>
                <Navbar/>
                <div className='flex justify-center items-center w-full h-full'>
                    <form action="#" className='
                    flex text-white backdrop-blur-lg border border-blue-200 rounded-xl'>
                        <div
                            className='plex plex-col space-y-11 bg-[rgba(171,152,198,0.4)] border-0 rounded-tl-xl rounded-bl-xl p-5'>
                            <div className='space-y-2 flex flex-col'>
                                <span className='text-xl'>Phone</span>
                                <span className='flex items-center'><span className='mr-2 text-[#6dc3e5]'><FaWhatsapp/></span>+49 176 762 722 38</span>
                            </div>
                            <div className='space-y-2 flex flex-col'>
                                <span className='space-y-2 flex flex-col'>Work Email</span>
                                <span className='flex items-center'><span className='mr-2 mt-1 text-[#6dc3e5]'><AiOutlineMail/></span>vitaliisili@yahoo.com</span>
                            </div>
                            <div className='space-y-2 flex flex-col'>
                                <span className='text-xl text-[#6dc3e5] '>Location</span>
                                <span className='flex items-center'><span className='mr-2 text-[#6dc3e5] '><HiOutlineMapPin/></span>DE, 81475 Munchen</span>
                            </div>
                            <div>
                                <span className='text-xl text-[#6dc3e5] '>Social Profiles</span>
                                <div className='flex space-x-4 mt-2'>
                                    <Link to='https://www.linkedin.com/in/vitaliisili/'><div className='transition-all duration-300 hover:scale-125 text-4xl'><AiOutlineLinkedin/></div></Link>
                                    <Link to='https://github.com/vitaliisili'><div className='transition-all duration-300 hover:scale-125  text-4xl'><AiFillGithub/></div></Link>
                                    <Link to='https://www.facebook.com/silivitalii/'><div className='transition-all duration-300 hover:scale-125  text-4xl'><AiOutlineFacebook/></div></Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col p-5 space-y-6'>
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='text-xl'>Name</label>
                                <input type="text" id='name'
                                       className='rounded-md border border-[#6dc3e5] bg-transparent pl-2 pt-1 pb-1 outline-0 mt-2'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-xl'>Email</label>
                                <input type="text" id='email'
                                       className='rounded-md border border-[#6dc3e5] bg-transparent pl-2 pt-1 pb-1 outline-0 mt-2'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message" className='text-xl'>Message</label>
                                <textarea name="message" id="message" cols="30" rows="4"
                                          className='rounded-md border border-[#6dc3e5] bg-transparent pl-2 pt-1 pb-1 outline-0 mt-2'/>
                            </div>
                            <button className='self-end hover:scale-110 hover:text-[#6dc3e5] text-xl'>Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact