import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useAppointments = () => {

    const { agenda, setAgenda,
        appointmentsAgenda, setAppointmentsAgenda,
        updateOpen, setUpdateOpen,
        appointmentToUpdate, setAppointmentToUpdate
    } = useContext(ApointmentContext)


    const postCreateNewAppointment = async (appointmentData) => {
        const response = await fetch(`${BACKEND_URL}/api/appointments/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        })

        const resJson = await response.json()
        return resJson
    }

    const getAgenda = async (week = '34') => {

        const res = await fetch(`${BACKEND_URL}/api/appointment/get-agenda/${week}`, {
            method: 'GET',
        })
        const resJson = await res.json()
        if (resJson.success) {
            setAgenda(resJson.data[0])
            setAppointmentsAgenda(resJson.data[0].appointments)
        }
        return resJson
    }

    const handleUpdateOpen = () => setUpdateOpen(true)
    const handleUpdateClose = () => setUpdateOpen(false)

    const updateAppointementDataToBeUpdated = (dataToUpdate) => {
        console.log(dataToUpdate);
    }



    useEffect(() => {
        getAgenda()
    }, [])

    return {
        agenda,
        appointmentsAgenda,
        updateOpen,

        handleUpdateOpen,
        handleUpdateClose,
        postCreateNewAppointment,
        getAgenda,
        updateAppointementDataToBeUpdated
    }

}