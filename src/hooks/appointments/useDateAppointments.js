import { useContext, useState } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useDateAppointments = () => {

    const { selectedDate, setSelectedDate } = useContext(ApointmentContext)

    const onChangeSelectedDate = (date) => {
        if (date) {
            setSelectedDate(date)
        }
    }

    return {
        selectedDate,

        onChangeSelectedDate,
    }

}