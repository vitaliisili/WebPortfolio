import React from 'react'


const AppContainer = ({children}) => {
    return (
        <div className='flex bg-[#1b1f24] justify-center overflow-auto'>
            {children}
        </div>
    )
}

export default AppContainer