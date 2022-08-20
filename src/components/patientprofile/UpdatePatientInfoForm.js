import React from 'react'
import { Alert, Button, TextField } from '@mui/material';
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient';


const UpdatePatientInfoForm = () => {

    const { patientInfoToUpdate, setPatientInfoToUpdate, isPatientUpdated, onSaveUpdatedPatientInformation, } = useUpdatePatient()

    const handleChange = (name) =>
        (event) => {
            setPatientInfoToUpdate({ ...patientInfoToUpdate, [name]: event.target.value })
        };

    return (
        <div className='w-full h-full pl-10 mt-5'>
            <div className='flex flex-row w-full justify-between'>
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
                <div className='flex flex-col w-1/2 ml-5 mb-2'>
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

            </div>

            <div className='flex flex-row w-full justify-between'>
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
                <div className='flex flex-col w-1/2 ml-5 mb-2'>
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

            </div>

            <div className='flex flex-row w-full justify-between'>

                <div className='flex flex-col w-1/2 mb-2'>
                    <label className='mb-2'>Correo electronico</label>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue={patientInfoToUpdate.lastName}
                        onChange={handleChange('lastName')}
                        variant="filled"
                        size="small"
                    />
                </div>
                <div className='flex flex-col w-1/2 ml-5 mb-2'>
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
            </div>
            {
                isPatientUpdated && <Alert severity="success">Se ha actualizado la informacion correctamente</Alert>
            }
            <div>
                <Button onClick={async () => await onSaveUpdatedPatientInformation(patientInfoToUpdate)} variant="contained" component="span" color='success' className='mt-3'>
                    <span>Actualizar</span>
                </Button>
            </div>
        </div>
    )
}

export default UpdatePatientInfoForm