import React, { useEffect } from 'react'

const Doctors = () => {

    const makeRequest = async () => {
        const res = await fetch('http://localhost:8080/api/events/get-all-events')
        console.log(res)
    }

    useEffect(() => {
        makeRequest()
    }, [])

    return (
        <div>Doctors!</div>
    )
}

export default Doctors