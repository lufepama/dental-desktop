import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const AppointmentsProvider = ({ children }) => {

    const [agenda, setAgenda] = useState({})
    const [appointmentsAgenda, setAppointmentsAgenda] = useState([])

    return (
        <Context.Provider value={{ agenda, setAgenda, appointmentsAgenda, setAppointmentsAgenda }} >
            {children}
        </Context.Provider>
    )
}

export default Context