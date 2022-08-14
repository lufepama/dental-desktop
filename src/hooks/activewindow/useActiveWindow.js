
import { useContext } from 'react'
import MainWindowContext from '../../context/mainview/MainviewProvider'
import CreatePatient from '../../pages/Patients/CreatePatient'
import Patients from '../../pages/Patients/Patients'
import CreateDoctor from '../../pages/Doctors/CreateDoctor'
import Doctors from '../../pages/Doctors/Doctors'
import CreateAppointments from '../../pages/Appointments/CreateAppointments'
import PatientHistory from '../../pages/PatientHistory/PatientHistory'
import PatientData from '../../pages/PatientHistory/windows/PatientData'
import PatientAppointments from '../../pages/PatientHistory/windows/PatientAppointments'
import PatientFiles from '../../pages/PatientHistory/windows/PatientFiles'
import PatientTreatments from '../../pages/PatientHistory/windows/PatientTreatments'
import AgendaView from '../../pages/Appointments/AgendaView'

export const useActiveWindow = () => {

    const { activeWindow, setActiveWindow, activeWindowPatient, setActiveWindowPatient } = useContext(MainWindowContext)

    const updateActiveWindow = (windowData) => {
        setActiveWindow(windowData.title)
    }

    const updateActiveWindowPatient = (windowName) => {
        setActiveWindowPatient(windowName)
    }

    const displayActiveWindow = () => {

        switch (activeWindow) {
            case 'Crear nuevo paciente':
                console.log('case')
                return (<CreatePatient />)
            case 'Lista de pacientes':
                return (<Patients />)
            case 'Create doctor':
                return (<CreateDoctor />)
            case 'Lista de doctores':
                return (<Doctors />)
            case 'Crear nueva Cita':
                return <CreateAppointments />
            case 'Patient history':
                return <PatientHistory />
            case 'Agenda':
                return <AgendaView />
            default:
                return null
        }

    }

    const displayActiveWindowPatient = () => {
        switch (activeWindowPatient) {
            case 'Datos personales':
                return <PatientData />
            case 'Imagenes y archivos':
                return <PatientFiles />
            case 'Citas':
                return <PatientAppointments />
            case 'Planes de tratamiento':
                return <PatientTreatments />
            default:
                return <PatientData />
        }
    }

    return {
        activeWindow, setActiveWindow,
        updateActiveWindow, displayActiveWindow,
        updateActiveWindowPatient, displayActiveWindowPatient
    }

}