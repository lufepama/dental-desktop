
import { useContext } from 'react'
import MainWindowContext from '../../context/mainview/MainviewProvider'
import CreatePatient from '../../pages/Patients/CreatePatient'
import Patients from '../../pages/Patients/Patients'
import CreateDoctor from '../../pages/Doctors/CreateDoctor'
import Doctors from '../../pages/Doctors/Doctors'
import CreateAppointments from '../../pages/Appointments/CreateAppointments'
import PatientHistory from '../../pages/PatientHistory/PatientHistory'

export const useActiveWindow = () => {

    const { activeWindow, setActiveWindow } = useContext(MainWindowContext)

    const updateActiveWindow = (windowName) => {
        setActiveWindow(windowName)
    }

    const displayActiveWindow = () => {
        switch (activeWindow) {
            case 'Informacion del paciente':
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
            default:
                console.log('nana')
        }
    }

    return {
        activeWindow, setActiveWindow,
        updateActiveWindow, displayActiveWindow
    }

}