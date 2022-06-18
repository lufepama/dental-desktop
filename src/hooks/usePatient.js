import { useContext } from 'react'
import { BACKEND_URL } from '../backend'
import PatientsContext from '../context/patients/PatientsContext'

export const usePatient = () => {

    const { patientsList } = useContext(PatientsContext)

    const postCreateNewPatient = async (patientData) => {
        const response = await fetch(`${BACKEND_URL}/api/patients/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        })

        const resJson = await response.json()
        return resJson
    }


    return {
        postCreateNewPatient,
        patientsList
    }

}