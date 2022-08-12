import { useContext } from 'react'
import { BACKEND_URL } from '../../backend'
import DoctorsContext from '../../context/doctors/DoctorsContext'

export const useDoctor = () => {

    const { doctorsList } = useContext(DoctorsContext)

    const postCreateNewDoctor = async (doctorData) => {
        const response = await fetch(`${BACKEND_URL}/api/doctors/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctorData)
        })

        const resJson = await response.json()
        return resJson

    }


    return {
        postCreateNewDoctor,
        doctorsList
    }

}