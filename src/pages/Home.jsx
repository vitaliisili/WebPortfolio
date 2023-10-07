import React from 'react';
import TypeHeader from "../components/TypeHeader";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className='w-full h-screen'>
            <div className="container mx-auto font-spacegrotesk pl-10 pr-10">
                <Navbar/>
                <TypeHeader/>
            </div>
        </div>
    );
};

export default Home;