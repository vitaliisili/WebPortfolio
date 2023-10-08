import React from 'react';
import {TypeAnimation} from "react-type-animation";

const TypeHeader = () => {
    return (
        <div className='mt-40'>
            <span className='text-white text-lg font-bold'>Hi There!</span>
            <div className="div">
                <TypeAnimation
                    sequence={[
                        "I'm Vitalii, a\nDeveloper",
                        2000,
                        "I'm Vitalii, a\nFreelancer",
                        3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className='type-text'
                />
            </div>
        </div>
    )
}

export default TypeHeader