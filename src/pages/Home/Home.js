import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Home = () => {

    return (
        <div className='flex flex-col'>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Home