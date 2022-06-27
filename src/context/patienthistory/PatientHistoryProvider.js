import { useState, createContext } from 'react'

const Context = createContext({})

export const PatientHistoryProvider = ({ children }) => {

    const [currentPatientInformation, setCurrentPatientInformation] = useState({})

    return (
        <Context.Provider value={{ currentPatientInformation, setCurrentPatientInformation, }} >
            {children}
        </Context.Provider>
    )
}

export default Context