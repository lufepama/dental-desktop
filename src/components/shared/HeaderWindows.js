import React from 'react'

const HeaderWindows = ({ icon, title }) => {
    return (
        <div className='flex flex-row items-center h-full w-full bg-blue-800 pl-6'>
            <p className='text-2xl text-gray-100'>
                {icon}
            </p>
            <span className='ml-5 text-2xl text-gray-100'>
                {title}
            </span>
        </div>
    )
}

export default HeaderWindows