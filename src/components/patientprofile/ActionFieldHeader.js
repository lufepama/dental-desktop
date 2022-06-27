import React from 'react'


const ActionFieldHeader = ({ icon, title, onSubmit }) => {
    return (
        <div className='flex flex-row w-full'>
            {icon}
            <span className='ml-3'>{title}</span>
        </div>
    )
}

export default ActionFieldHeader