import React from 'react'


const AppContainer = ({children}) => {
    return (
        <div className='flex bg-[#1a1a1a] justify-center overflow-scroll'>
            {children}
        </div>
    )
}

export default AppContainer