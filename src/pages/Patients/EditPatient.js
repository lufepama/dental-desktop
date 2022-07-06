import React, { useEffect, useState } from 'react'
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient'
import Avatar from '@mui/material/Avatar';
import HeaderWindows from '../../components/HeaderWindows';
import UpdateIcon from '@mui/icons-material/Update';
import UpdatePatientInfoForm from '../../components/patientprofile/UpdatePatientInfoForm';
import ActionFieldHeader from '../../components/patientprofile/ActionFieldHeader';
import UpdatePatientCliniqForm from '../../components/patientprofile/UpdatePatientCliniqForm';
import PatientImageForm from '../../components/PatientImageForm';

const EditPatient = () => {

    const [image, setImage] = useState(null)
    const { patientInfoToUpdate, setPatientInfoToUpdate, updateInfoForm, onChangeUpdatePatientForm } = useUpdatePatient()
    const onFileUpload = (formData) => {
        setPatientInfoToUpdate({ ...patientInfoToUpdate, profileImg: formData })
    }

    useEffect(() => {
        console.log('Prrr', patientInfoToUpdate)
    }, [patientInfoToUpdate, setPatientInfoToUpdate])

    return (
        <div className='h-screen w-screen bg-gray-100 flex flex-col'>
            <HeaderWindows icon={<UpdateIcon className='text-gray-100' fontSize='inherit' />} title='Actualizar informacion' />
            <div className='flex flex-row h-full h-full'>
                <div className='w-1/4 h-full pt-5'>
                    <div className='flex flex-col items-center'>
                        <Avatar sx={{ height: '190px', width: '190px' }} alt={`${patientInfoToUpdate.firstName}`} src={image ? image?.preview : patientInfoToUpdate.profileImg} />
                        <PatientImageForm onFileUpload={onFileUpload} title='Actualizar foto' setImage={setImage} />
                        <div className='h-36 w-full mt-5 p-1'>
                            <ActionFieldHeader icon={<UpdateIcon />} title='Datos personales' onSubmit={() => { onChangeUpdatePatientForm('patient') }} />
                            <ActionFieldHeader icon={<UpdateIcon />} title='Informacion clinica' onSubmit={() => { onChangeUpdatePatientForm('clinica') }} />
                        </div>
                    </div>
                </div>
                {
                    updateInfoForm === 'patient'
                        ? <>
                            {Object.keys(patientInfoToUpdate).length != 0 &&
                                <UpdatePatientInfoForm />
                            }</>
                        : <UpdatePatientCliniqForm />
                }
            </div>
        </div >
    )

}

export default EditPatient