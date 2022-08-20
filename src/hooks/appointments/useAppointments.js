import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useAppointments = () => {

    const { agenda, setAgenda,
        appointmentsAgenda, setAppointmentsAgenda,
        updateOpen, setUpdateOpen
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

    const updateAppointementDataToBeUpdated = (dataToUpdate, doctorAgendaId) => {
        console.log(dataToUpdate, doctorAgendaId);
    }

    const getArrayOfCellsInRangedAppointment = (doctorId = '62ad35f724f68a85f25cf09f', initCell = '10:00', upCell = '11:00') => {
        const hoursAppointmentsDoctorAgenda = appointmentsAgenda.filter(el => el.doctorId == doctorId)[0]?.hoursAppointments
        if (hoursAppointmentsDoctorAgenda.length != 0) {
            const lowerCellInfo = hoursAppointmentsDoctorAgenda.findIndex(el => el.hour == initCell)
            const upperCellInfo = hoursAppointmentsDoctorAgenda.findIndex(el => el.hour == upCell)
            const arrayOfIdsRangedInAppointment = hoursAppointmentsDoctorAgenda.slice(lowerCellInfo, upperCellInfo + 1)
            return arrayOfIdsRangedInAppointment
        }
        return null
    }


    return {
        agenda,
        appointmentsAgenda,
        updateOpen,

        handleUpdateOpen,
        handleUpdateClose,
        postCreateNewAppointment,
        getAgenda,
        updateAppointementDataToBeUpdated,
        getArrayOfCellsInRangedAppointment
    }

}