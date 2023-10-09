import React from 'react';
import TypeHeader from "../components/TypeHeader";
import Navbar from "../components/Navbar";
import smoke from "../static/video/smoke2.mp4"

const Home = () => {
    return (
        <div className=''>
            <video className='fixed video w-screen h-screen object-cover top-0 left-0 -z-10' src={smoke} autoPlay loop muted></video>
            <div className='xs:w-full md:container relative mx-auto h-screen pl-10 pr-10'>
                <Navbar/>
                <div className='flex justify-between pb-10'>
                    <TypeHeader/>
                    {/*<div className='text-xl text-white self-center'>*/}
                    {/*    Image*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Home