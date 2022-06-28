import { useContext, useEffect } from 'react'
import { BACKEND_URL } from '../../backend'
import PatientsContext from '../../context/patients/PatientsContext'

export const useUpdatePatient = () => {

    const { patientInfoToUpdate, setPatientInfoToUpdate } = useContext(PatientsContext)

    const loadInfoData = async () => {
        window.api.loadUpdateInfor((data) => {
            setPatientInfoToUpdate(data)
        })
    }

    useEffect(() => {
        loadInfoData()
    }, [])

    return {
        patientInfoToUpdate,
        loadInfoData
    }

}