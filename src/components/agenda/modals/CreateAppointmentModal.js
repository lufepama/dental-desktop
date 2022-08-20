import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useAppointments } from '../../../hooks/appointments/useAppointments'
import HeaderWindows from '../../shared/HeaderWindows'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useDateAppointments } from '../../../hooks/appointments/useDateAppointments'
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import AutocompleteInput from '../../AutocompleteInput';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import PatientCreationForm from '../../PatientCreationForm';
import { usePatient } from '../../../hooks/patients/usePatient'

const CreateAppointmentModal = () => {

    const { updateOpen,
        handleUpdateClose, } = useAppointments()
    const { selectedDate } = useDateAppointments()
    const [isPatientRegistered, setIsPatientRegistered] = useState(true)
    const [selectedPatientInputInformation, setSelectedPatientInputInformation] = useState({})

    const { patientsList } = usePatient()
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const handleSeletedPatientInput = (value) => {
        setSelectedPatientInputInformation(value)
    }

    const handlePatientActivity = () => {
        setIsPatientRegistered(prev => !prev)
    }

    return (
        <Modal
            open={updateOpen}
            onClose={handleUpdateClose}
            aria-labelledby="modal-modal-title"
        >
            <Box className='w-2/3 h-2/3 flex flex-col absolute 
                        top-1/2 left-1/2 -mt-56 -ml-96 bg-gray-100'>
                <div className='w-full h-1/6 bg-blue-300'>
                    <HeaderWindows title='Crear cita' icon={<PermContactCalendarIcon />} />
                </div>
                <div className='w-full h-5/6 bg-gray-100 overflow-scroll	'>
                    <div className="pl-6 pr-6 flex flex-col">
                        <span className='text-lg font-bold underline'>Informacion clinica</span>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='flex flex-row mt-2'>
                                <span className='text-lg font-bold'>Fecha: </span>
                                <span className='text-lg ml-2 bg-white'>12/11/2022 </span>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <span className='text-lg font-bold'>Hora de la cita: </span>
                                <span className='text-lg ml-2 '>10:10</span>
                                <span className='text-lg ml-2'>-</span>
                                <FormControl sx={{ minWidth: 120, height: 20, marginLeft: 1 }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        className='h-8'
                                    >
                                        <MenuItem value={10}>10:15</MenuItem>
                                        <MenuItem value={20}>10:30</MenuItem>
                                        <MenuItem value={30}>10:45</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <span className='text-md font-bold'>Fecha: </span>
                                <span className='text-md ml-2 bg-white'>12/11/2022 </span>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-around mt-3">
                            <div className='flex flex-row mt-2'>
                                <span className='text-lg font-bold'>Doctor: </span>
                                <span className='text-lg ml-2 bg-white'>Dr.Martinita </span>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <span className='text-lg font-bold'>Especialidad: </span>
                                <span className='text-lg ml-2 bg-white'>General</span>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 pr-6 flex flex-col mt-5">
                        <span className='text-lg font-bold underline'>Informacion del paciente</span>
                        <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <FormLabel id="demo-radio-buttons-group-label">Nuevo paciente</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={true}
                                name="radio-buttons-group"
                                className=''
                                value={isPatientRegistered}
                                style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}
                                onChange={handlePatientActivity}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="No" />
                                <FormControlLabel value={false} control={<Radio />} label="Si" />
                            </RadioGroup>
                        </FormControl>
                        {
                            isPatientRegistered
                                ? (
                                    <div className="w-1/2">
                                        <AutocompleteInput patientsList={patientsList} handleSeletedPatientInput={handleSeletedPatientInput} />
                                    </div>
                                )
                                : (
                                    <div className="flex flex-col mt-5">
                                        <PatientCreationForm />
                                    </div>
                                )
                        }
                    </div>
                    <div className="flex flex-row justify-center">
                        <Button variant="contained" component="span" color='success' className='mt-3'>
                            <span>Actualizar</span>
                        </Button>
                        <Button variant="contained" component="span" color='primary' className='mt-3 ml-3'>
                            <span>Cerrar</span>
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default CreateAppointmentModal