import React from 'react';
import Navbar from "../components/Navbar";
import smoke from "../static/video/smoke13.mp4"

const Blog = () => {
    return (
        <div className='w-screen h-screen'>
            <video className='absolute h-full w-full object-cover -z-50' src={smoke} autoPlay loop muted></video>
            <div className='xs:w-full md:container flex flex-col h-screen items-center pl-10 pr-10 mx-auto'>
                <Navbar/>
                <h1 className='text-white text-8xl mt-60'>Coming Soon</h1>
            </div>
        </div>
    )
}

export default Blog