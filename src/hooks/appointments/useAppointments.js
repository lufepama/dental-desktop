import { useContext } from 'react'
import { BACKEND_URL } from '../../backend'

export const useAppointments = () => {

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

    return {
        postCreateNewAppointment
    }

}