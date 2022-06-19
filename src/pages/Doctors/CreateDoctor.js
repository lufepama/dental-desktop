import React, { useEffect, useRef, useState } from 'react'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useDoctor } from '../../hooks/doctors/useDoctors';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HeaderWindows from '../../components/HeaderWindows';


const CreateDoctor = () => {

    const { postCreateNewDoctor } = useDoctor()
    const [creationMessage, setCreationMessage] = useState({
        isSuccess: false,
        successMessage: ''
    })

    const [patientData, setPatientData] = useState({
        firstName: 'Daniela',
        lastName: 'Paz martinez',
        spectiality: 'Ortodoncista',
        qualification: 'Master',
        phoneNumber: '234234234',
        address: 'Calle'
    })
    const { isSuccess, successMessage } = creationMessage
    const { firstName, lastName, spectiality, qualification, phoneNumber, address } = patientData

    const handleChange = (name) =>
        (event) => {
            setPatientData({ ...patientData, [name]: event.target.value })
        };

    const handleSubmit = async () => {
        const response = await window.api.openDialogPatientCreation(firstName)
        if (response) {
            handleCreation()
        }
    }

    const handleCreation = async () => {
        const response = await postCreateNewDoctor(patientData)
        const { success } = response
        if (success) {
            setCreationMessage({ isSuccess: true, successMessage: 'Se ha creado el nuevo registro de doctor' })
            setPatientData({ ...patientData, firstName: '', lastName: '', phoneNumber: '', occupation: '', age: 0, address: '' })
        }
    }


    return (
        <div className='w-screen h-screen bg-gray-200'>
            <HeaderWindows icon={<BloodtypeIcon className='text-gray-100' fontSize='inherit' />} title='Informacion del doctor' />
            {
                isSuccess && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        {successMessage}
                    </Alert>
                )
            }

            <div className='w-full h-2/3 flex flex-row p-5'>
                <div className='w-1/3 bg-gray-100'>
                    <div className='flex flex-col'>
                        <span>Nombre del doctor</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={firstName} onChange={handleChange('firstName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Apellidos del doctor</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={lastName} onChange={handleChange('lastName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Especialidad</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={spectiality} onChange={handleChange('spectiality')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Cualificacion</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={qualification} onChange={handleChange('qualification')} />
                    </div>
                </div>
                <div className='w-1/3 ml-5 mr-3'>
                    <div className='flex flex-col'>
                        <span>Direccion</span>
                        <input className='h-8 border-2 border-gray-600' value={address} onChange={handleChange('address')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Numero de contacto</span>
                        <input className='h-8 border-2 border-gray-600' value={phoneNumber} onChange={handleChange('phoneNumber')} />
                    </div>
                </div>
                <div className='w-1/3 bg-red-400'>

                </div>
            </div>
            <div className='h-1/5 flex flex-row justify-center items-center'>
                <Button onClick={handleSubmit}>Guardar</Button>
                <Button>Reiniciar</Button>
                <Button>Cerrar</Button>
            </div>

        </div>
    )
}

export default CreateDoctor