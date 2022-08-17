import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const AppointmentsProvider = ({ children }) => {

    const [agenda, setAgenda] = useState({})
    const [appointmentsAgenda, setAppointmentsAgenda] = useState([])
    const [updateOpen, setUpdateOpen] = useState(false)
    const [appointmentToUpdate, setAppointmentToUpdate] = useState({})

    return (
        <Context.Provider value={{
            agenda, setAgenda,
            appointmentsAgenda, setAppointmentsAgenda,
            updateOpen, setUpdateOpen,
            appointmentToUpdate, setAppointmentToUpdate
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context