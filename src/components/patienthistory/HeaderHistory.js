import React from 'react'

const HeaderHistory = ({ title }) => {
    return (
        <div className='flex flex-row justify-center w-full h-14 bg-history-blue p-2'>
            <div className='p-3 bg-history-gray flex flex-col justify-center rounded-lg'>
                <span className='font-bold text-xl'>{title}</span>
            </div>
        </div>
    )
}

export default HeaderHistory