import React from 'react'
import { Button, TextField } from '@mui/material';
import TitleHeading from './TitleHeading';
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient';


const UpdatePatientInfoForm = () => {

    const { patientInfoToUpdate, setPatientInfoToUpdate } = useUpdatePatient()

    const handleChange = (name) =>
        (event) => {
            setPatientInfoToUpdate({ ...patientInfoToUpdate, [name]: event.target.value })
        };

    return (
        <div className='w-3/4 h-full bg-blue-100 pl-10'>
            <TitleHeading title={'Informacion del paciente'} />
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Nombre</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfoToUpdate.firstName}
                    onChange={handleChange('firstName')}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Apellidos</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfoToUpdate.lastName}
                    onChange={handleChange('lastName')}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Telefono</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfoToUpdate.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Situacion laboral</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfoToUpdate.ocupation}
                    onChange={handleChange('ocupation')}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Direccion</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfoToUpdate.address}
                    onChange={handleChange('address')}
                    variant="filled"
                    size="small"
                />
            </div>
            <div>
                <Button onClick={() => { console.log('dattta', patientInfoToUpdate) }} variant='contained' color='success'>Guardar</Button>
            </div>
        </div>
    )
}

export default UpdatePatientInfoForm