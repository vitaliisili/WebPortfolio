import React from 'react';
import {TypeAnimation} from "react-type-animation";

const TypeHeader = () => {
    return (
        <TypeAnimation
            sequence={[
                "I'm Vitalii, a\nDeveloper",
                2000,
                "I'm Vitalii, a\nFreelancer",
                4000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className='type-text'
        />
    );
};

export default TypeHeader