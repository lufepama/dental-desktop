import React, { useEffect } from 'react'
import TitleHistory from '../../../components/patienthistory/TitleHistory'
import UpdatePatientInfoForm from '../../../components/patientprofile/UpdatePatientInfoForm'
import { useUpdatePatient } from '../../../hooks/patients/useUpdatePatient'


const PatientData = () => {

    const { resetIsPatientUpdated } = useUpdatePatient()

    useEffect(() => {
        resetIsPatientUpdated()
    }, [])

    return (
        <div className='w-full h-full'>
            <TitleHistory title='Informacion personal' />
            <div>
                <UpdatePatientInfoForm />
            </div>
        </div>
    )
}

export default PatientData