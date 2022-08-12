import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const DoctorsProvider = ({ children }) => {

    const [doctorsList, setDoctorsList] = useState([])

    const fetchGetDoctorsList = async () => {
        const response = await fetch(`${BACKEND_URL}/api/doctors/get-all-doctors`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const resJson = await response.json()
        console.log(resJson?.data);
        setDoctorsList(resJson?.data)
    }

    useEffect(() => {
        fetchGetDoctorsList()

    }, [])

    return (
        <Context.Provider value={{ doctorsList }} >
            {children}
        </Context.Provider>
    )
}

export default Context