import React, { useEffect } from 'react'
import { useState } from 'react'
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import HeaderWindows from '../../components/HeaderWindows';
import UpdateIcon from '@mui/icons-material/Update';
import UpdatePatientInfoForm from '../../components/patientprofile/UpdatePatientInfoForm';
import ActionFieldHeader from '../../components/patientprofile/ActionFieldHeader';
import UpdatePatientCliniqForm from '../../components/patientprofile/UpdatePatientCliniqForm';


const EditPatient = () => {

    const { patientInfoToUpdate, updateInfoForm, onChangeUpdatePatientForm } = useUpdatePatient()

    return (
        <div className='h-screen w-screen bg-gray-100 flex flex-col'>
            <HeaderWindows icon={<UpdateIcon className='text-gray-100' fontSize='inherit' />} title='Actualizar informacion' />
            <div className='flex flex-row h-full h-full'>
                <div className='w-1/4 h-full pt-5'>
                    <div className='flex flex-col items-center'>
                        <Avatar sx={{ height: '190px', width: '190px' }} alt={`${patientInfoToUpdate.firstName}`} src={patientInfoToUpdate.profileImg} />
                        <Button variant="contained" component="span" startIcon={<UpgradeIcon />} className='mt-3'>
                            <span>Actualizar foto</span>
                        </Button>
                        <div className='h-36 w-full mt-5 p-1'>
                            <ActionFieldHeader icon={<UpdateIcon />} title='Datos personales' onSubmit={() => { onChangeUpdatePatientForm('personal') }} />
                            <ActionFieldHeader icon={<UpdateIcon />} title='Informacion clinica' onSubmit={() => { onChangeUpdatePatientForm('clinica') }} />
                        </div>
                    </div>
                </div>
                {
                    updateInfoForm === 'personal'
                        ? <>
                            {Object.keys(patientInfoToUpdate).length != 0 &&
                                <UpdatePatientInfoForm patientInfo={patientInfoToUpdate} />
                            }</>
                        : <UpdatePatientCliniqForm />

                }

            </div>
        </div >
    )

}

export default EditPatient