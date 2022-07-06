import { formControlUnstyledClasses } from '@mui/base'
import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import PatientsContext from '../../context/patients/PatientsContext'

export const useUpdatePatient = () => {

    const { patientInfoToUpdate, setPatientInfoToUpdate, updateInfoForm, setUpdateInfoForm } = useContext(PatientsContext)

    const loadInfoData = async () => {
        window.api.loadUpdateInfor((data) => {
            setPatientInfoToUpdate(data)
        })
    }

    const putPatientInformation = async (formData) => {
        const res = await fetch(`${BACKEND_URL}/api/patients/update-patient`, {
            method: 'PUT',
            body: JSON.stringify(formData)
        })
        console.log('res', res);

    }

    const onChangeUpdatePatientForm = (value) => {
        console.log('vallll', value)
        setUpdateInfoForm(value)
    }
    useEffect(() => {
        loadInfoData()
    }, [])

    return {
        patientInfoToUpdate,
        loadInfoData,
        updateInfoForm,
        onChangeUpdatePatientForm,
        putPatientInformation,
        setPatientInfoToUpdate
    }

}