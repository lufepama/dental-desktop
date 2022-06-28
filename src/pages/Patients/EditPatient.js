import React, { useEffect } from 'react'
import { useState } from 'react'
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import HeaderWindows from '../../components/HeaderWindows';
import UpdateIcon from '@mui/icons-material/Update';
import UpdatePatientForm from '../../components/patientprofile/UpdatePatientForm';

const EditPatient = () => {

    const { patientInfoToUpdate } = useUpdatePatient()
    console.log(patientInfoToUpdate)
    return (
        <div className='h-screen w-screen bg-gray-100 flex flex-col'>
            <HeaderWindows icon={<UpdateIcon className='text-gray-100' fontSize='inherit' />} title='Actualizar informacion' />
            <div className='flex flex-row h-full h-full'>
                <div className='w-1/4 h-full pt-5'>
                    <div className='flex flex-col items-center'>
                        <Avatar sx={{ height: '190px', width: '190px' }} alt={`${patientInfoToUpdate.firstName}`} src={patientInfoToUpdate.profileImg} />
                        <Button variant="" sx={{ backgroundColor: 'black' }} startIcon={<UpgradeIcon />}>
                            Actualizar
                        </Button>
                    </div>
                </div>
                {Object.keys(patientInfoToUpdate).length != 0 &&
                    <UpdatePatientForm patientInfo={patientInfoToUpdate} />
                }
            </div>

        </div>
    )

}

export default EditPatient