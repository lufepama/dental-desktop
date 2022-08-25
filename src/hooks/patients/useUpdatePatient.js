import { useContext } from 'react'
import { BACKEND_URL } from '../../backend'
import PatientsContext from '../../context/patients/PatientsContext'
import { managePatientFormData } from '../../helpers/PatientHistory/index'

export const useUpdatePatient = () => {

    const { patientInfoToUpdate, setPatientInfoToUpdate,
        updateInfoForm, setUpdateInfoForm,
        isPatientUpdated, setIsPatientUpdated
    } = useContext(PatientsContext)

    const putPatientInformation = async (updatedData) => {
        const formUpdatedData = managePatientFormData(updatedData)

        const res = await fetch(`${BACKEND_URL}/api/patients/update-patient`, {
            method: 'PUT',
            body: formUpdatedData
        })
        const resJson = await res.json()
        return resJson
    }

    const onSaveUpdatedPatientInformation = async (updatedPatientInformation) => {
        const creationText = `Seguro que quieres actualizar la iformacion del paciente ${patientInfoToUpdate.firstName}?`
        const resWindow = await window.api.openDialogPatientCreation(creationText)
        if (resWindow) {
            const res = await putPatientInformation(updatedPatientInformation)
            if (res.success) {
                console.log({ res });
                setIsPatientUpdated(true)
            }
        }
    }


    const onChangeUpdatePatientForm = (value) => {
        setUpdateInfoForm(value)
    }

    const resetIsPatientUpdated = () => setIsPatientUpdated(false)

    return {
        patientInfoToUpdate,
        updateInfoForm,
        isPatientUpdated,
        setPatientInfoToUpdate,

        onChangeUpdatePatientForm,
        putPatientInformation,
        onSaveUpdatedPatientInformation,
        resetIsPatientUpdated
    }

}