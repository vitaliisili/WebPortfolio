import React from 'react'


const AppContainer = ({children}) => {
    return (
        <div className='relative overflow-auto'>
            {children}
        </div>
    )
}

export default AppContainer