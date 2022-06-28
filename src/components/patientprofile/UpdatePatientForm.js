import React from 'react'
import { Button, TextField } from '@mui/material';


const TitleHeading = () => {
    return (
        <div className='mb-5'>
            <span className='font-bold'>Informacion del paciente</span>
        </div>
    )
}

const UpdatePatientForm = ({ patientInfo }) => {


    return (
        <div className='w-3/4 h-full bg-blue-100 pl-3'>
            <TitleHeading />
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Nombre</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfo.firstName}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Apellidos</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfo.lastName}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Telefono</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfo.phoneNumber}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Situacion laboral</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfo.ocupation}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className='flex flex-col w-1/2 mb-2'>
                <label className='mb-2'>Direccion</label>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={patientInfo.address}
                    variant="filled"
                    size="small"
                />
            </div>
            <div>
                <Button variant='contained' color='success'>Guardar</Button>
            </div>
        </div>
    )
}

export default UpdatePatientForm