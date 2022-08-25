import { useContext } from 'react'
import { BACKEND_URL } from '../../backend'
import PatientsContext from '../../context/patients/PatientsContext'

import { useActiveWindow } from '../activewindow/useActiveWindow';
import { usePatientHistory } from '../patienthistory/usePatientHistory';
import { useUpdatePatient } from './useUpdatePatient';
import { managePatientFormData } from '../../helpers/PatientHistory/index'

export const usePatient = () => {

    const { patientsList, setPatientsList, fetchGetPatientList, setPatientInfoToUpdate,
        hasUserCreated, setHasUserCreated, isPatienteDeleted, setIsPatientDeleted,
    } = useContext(PatientsContext)
    const { setActiveWindow } = useActiveWindow()
    const { setActivePatientInformation } = usePatientHistory()

    const onUserCreated = (value) => {
        setHasUserCreated(value)
    }

    const openPatientHistoryWindow = (patientInfoToUpdate) => {
        setPatientInfoToUpdate(patientInfoToUpdate)
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

        const formInfoData = managePatientFormData(patientData)
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
        setPatientInfoToUpdate(patientData)
        setActiveWindow('Patient history')
        setActivePatientInformation(patientData)
    }

    return {
        isPatienteDeleted,
        patientsList,
        fetchGetPatientList,
        hasUserCreated,

        onUserCreated,
        handleDeletePatient,
        postCreateNewPatient,
        handleOpenPatientWindow,
        updateIsPatientDeleted,
        openPatientHistoryWindow,
    }

}