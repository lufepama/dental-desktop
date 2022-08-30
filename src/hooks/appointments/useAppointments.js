import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import ApointmentContext from '../../context/appointments/ApointmentsContext'

export const useAppointments = () => {

    const { agenda, setAgenda,
        appointmentsAgenda, setAppointmentsAgenda,
        updateOpen, setUpdateOpen,
        selectedCellInfo, setSelectedCellInfo,
        currentDoctorAppointments, setCurrentDoctorAppointments,
        doctorAppointmentsId, setDoctorAppointmentsId,
        deleteOpen, setDeleteOpen
    } = useContext(ApointmentContext)

    const postCreateNewAppointment = async (appointmentData) => {
        const response = await fetch(`${BACKEND_URL}/api/appointment/create-appointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        })
        console.log(response)
        const resJson = await response.json()

        return resJson
    }

    const deleteAppointment = async (appointmentData) => {
        const response = await fetch(`${BACKEND_URL}/api/appointment/delete-detail-appointment`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        })
        const resJson = await response.json()

        return resJson
    }


    const getAgenda = async (week = '35') => {

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
    const handleDeleteOpen = () => setDeleteOpen(true)
    const handleDeleteClose = () => setDeleteOpen(false)

    const updateAppointementDataToBeUpdated = ({ data, doctorName, doctorAppointmentsId, doctorSpeciality='',appointmentsAvailable=''}) => {
        
        const cellInfo = {
            cellData: data,
            doctorInfo: { doctorName, doctorAppointmentsId, doctorSpeciality, appointmentsAvailable }
        }
        console.log(cellInfo)
        setSelectedCellInfo(cellInfo)
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

    const updateCurrentDoctorAppointments = (appointmentsList, doctorAppointmentsId) => {
        setDoctorAppointmentsId(doctorAppointmentsId)
        setCurrentDoctorAppointments(appointmentsList)
    }

    const getAppointmentsIdsListRanged = (lowIndex, highHour) => {
        console.log({highHour})
        const highIndex = currentDoctorAppointments.findIndex(el => el.hour === highHour)
        const appointmentsIdList = []
        for (let i = lowIndex; i <= highIndex; i++) {
            const currentId = currentDoctorAppointments[i].appointmentId
            appointmentsIdList.push(currentId)
        }
        return appointmentsIdList
    }

    return {
        agenda,
        appointmentsAgenda,
        updateOpen,
        deleteOpen,
        selectedCellInfo,
        currentDoctorAppointments,
        doctorAppointmentsId,

        handleUpdateOpen,
        handleUpdateClose,
        postCreateNewAppointment,
        getAgenda,
        updateAppointementDataToBeUpdated,
        getArrayOfCellsInRangedAppointment,
        updateCurrentDoctorAppointments,
        getAppointmentsIdsListRanged,
        deleteAppointment,
        handleDeleteClose,
        handleDeleteOpen
    }

}