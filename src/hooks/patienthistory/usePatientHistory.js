import { useContext } from 'react'
import PatientHistoryContext from '../../context/patienthistory/PatientHistoryProvider'

export const usePatientHistory = () => {

    const { currentPatientInformation, setCurrentPatientInformation } = useContext(PatientHistoryContext)

    const setActivePatientInformation = (patientData) => {
        setCurrentPatientInformation(patientData)
    }

    return {
        currentPatientInformation, setActivePatientInformation
    }

}