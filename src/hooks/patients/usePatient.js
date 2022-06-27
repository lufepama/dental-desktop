import { useContext } from 'react'
import { BACKEND_URL } from '../../backend'
import PatientsContext from '../../context/patients/PatientsContext'
import Patient from '../../interconexions/Patient/index'

import { useActiveWindow } from '../activewindow/useActiveWindow';
import { usePatientHistory } from '../patienthistory/usePatientHistory';

export const usePatient = () => {

    const { patientsList, setPatientsList, fetchGetPatientList,
        hasUserCreated, setHasUserCreated, isPatienteDeleted, setIsPatientDeleted
    } = useContext(PatientsContext)
    const { setActiveWindow } = useActiveWindow()
    const { setActivePatientInformation } = usePatientHistory()

    const onUserCreated = (value) => {
        setHasUserCreated(value)
    }

    const openPatientInformationWindow = async () => {
        const data = {
            url: '/patients/edit',
            titleData: 'actualizar informacion'
        }
        window.api.openPatientWindow(data)
    }

    const updateIsPatientDeleted = (value) => {
        setIsPatientDeleted(value)
    }

    const handleDeletePatient = async (patientId, firstName) => {
        const creationText = `Seguro que quieres eliminar a ${firstName} de la lista?`

        const resWindow = await window.api.openDialogPatientCreation(creationText)

        if (resWindow) {
            const response = await fetch(`${BACKEND_URL}/api/patients/delete-patient/${patientId}`, {
                method: 'DELETE',
            })
            const res = await response.json()

            const filtered = patientsList.filter(patient =>
                patient._id != patientId
            )
            setPatientsList(filtered)
            updateIsPatientDeleted(true)
            return res
        }
        return {}
    }

    const postCreateNewPatient = async (patientData) => {

        let formInfoData = new FormData()
        formInfoData.append('firstName', patientData.firstName)
        formInfoData.append('lastName', patientData.lastName)
        formInfoData.append('phoneNumber', patientData.phoneNumber)
        formInfoData.append('ocupation', patientData.ocupation)
        formInfoData.append('gender', patientData.gender)
        formInfoData.append('address', patientData.address)
        formInfoData.append('patientImg', patientData.patientImg)
        const response = await fetch(`${BACKEND_URL}/api/patients/create`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
            },
            body: formInfoData
        })

        const resJson = await response.json()
        return resJson
    }

    const handleOpenPatientWindow = (patientData) => {
        setActiveWindow('Patient history')
        setActivePatientInformation(patientData)
    }

    const handleCloseWindow = () => {
        Patient.closePatientListWindow()
    }

    return {
        postCreateNewPatient,
        patientsList,
        fetchGetPatientList,
        hasUserCreated, onUserCreated,
        handleDeletePatient,
        handleOpenPatientWindow,
        handleCloseWindow,
        isPatienteDeleted,
        updateIsPatientDeleted,
        openPatientInformationWindow
    }

}