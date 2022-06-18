import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'

const Home = () => {

    useEffect(() => {
        console.log('Hola home')
    }, [])

    return (
        <div className='flex flex-col'>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Home