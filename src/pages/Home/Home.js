import React, { useEffect } from 'react'
import Navbar from '../../components/shared/Navbar'
import { useActiveWindow } from '../../hooks/activewindow/useActiveWindow'

const Home = () => {

    const { activeWindow, displayActiveWindow } = useActiveWindow()


    useEffect(() => {

        console.log('home', activeWindow)
    }, [activeWindow])

    return (
        <div className='flex flex-col h-screen w-screen'>
            <Navbar />
            <div className='h-full w-fullbg-red-200'>
                {displayActiveWindow()}
            </div>
        </div>
    )
}

export default Home