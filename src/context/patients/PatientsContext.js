import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const PatientsProvider = ({ children }) => {

    const [patientsList, setPatientsList] = useState([])
    const [hasUserCreated, setHasUserCreated] = useState(false)
    const [isPatienteDeleted, setIsPatientDeleted] = useState(false)

    const fetchGetPatientList = async () => {
        const response = await fetch(`${BACKEND_URL}/api/patients/all-patients`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const resJson = await response.json()
        setPatientsList(resJson?.data)
    }

    useEffect(() => {
        fetchGetPatientList()
    }, [])

    return (
        <Context.Provider value={{
            patientsList, setPatientsList, fetchGetPatientList,
            hasUserCreated, setHasUserCreated, isPatienteDeleted, setIsPatientDeleted
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context