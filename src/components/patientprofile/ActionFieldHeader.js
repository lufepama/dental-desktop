import React from 'react'

const ActionFieldHeader = ({ icon, title, onSubmit }) => {

    return (
        <div className='flex flex-row w-full mt-3 bg-blue-200 rounded-lg'>
            <button className='h-9' onClick={() => { onSubmit(title) }}>
                <span className='text-xl'>{icon}</span>
                <span className='ml-3 text-xl'>{title}</span>
            </button>
        </div>
    )
}

export default ActionFieldHeader