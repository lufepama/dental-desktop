import React from 'react'
import { useNavigate } from 'react-router-dom'

const Appointments = () => {

    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate('/')} >Home</button>
        </div>
    )
}

export default Appointments