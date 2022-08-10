import React from 'react'
import Divider from '@mui/material/Divider';

const TitleHistory = ({ title }) => {
    return (
        <div className='flex flex-row'>
            <span className='font-bold text-xl mt-5' >{title}</span>
            <Divider light />
        </div>
    )
}

export default TitleHistory