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
        onChangeUpdatePatientForm
    }

}