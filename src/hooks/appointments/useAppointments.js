import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useAppointments = () => {

    const { agenda, setAgenda, appointmentsAgenda, setAppointmentsAgenda } = useContext(ApointmentContext)


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

    const getAgenda = async (week = '43') => {

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

    useEffect(() => {
        getAgenda()
    }, [])

    return {
        postCreateNewAppointment,
        getAgenda,
        agenda,
        appointmentsAgenda
    }

}