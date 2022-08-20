import { useContext, useState } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useDateAppointments = () => {

    const { selectedDate, setSelectedDate } = useContext(ApointmentContext)
    const [startDate, setStartDate] = useState(new Date());

    const onChangeSelectedDate = (date) => {
        if (date) {
            setStartDate(date)
            setSelectedDate(date)
        }
    }

    return {
        startDate,
        selectedDate,

        onChangeSelectedDate,
    }

}