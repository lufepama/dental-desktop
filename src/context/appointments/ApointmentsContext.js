import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const AppointmentsProvider = ({ children }) => {

    const [agenda, setAgenda] = useState({})
    const [appointmentsAgenda, setAppointmentsAgenda] = useState([])
    const [updateOpen, setUpdateOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [appointmentToUpdate, setAppointmentToUpdate] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedCellInfo, setSelectedCellInfo] = useState({})
    const [doctorAppointmentsId, setDoctorAppointmentsId] = useState(null)
    const [currentDoctorAppointments, setCurrentDoctorAppointments] = useState([])


    return (
        <Context.Provider value={{
            agenda, setAgenda,
            appointmentsAgenda, setAppointmentsAgenda,
            updateOpen, setUpdateOpen,
            appointmentToUpdate, setAppointmentToUpdate,
            selectedDate, setSelectedDate,
            selectedCellInfo, setSelectedCellInfo,
            doctorAppointmentsId, setDoctorAppointmentsId,
            currentDoctorAppointments, setCurrentDoctorAppointments,
            deleteOpen, setDeleteOpen
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context