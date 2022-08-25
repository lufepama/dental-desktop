import { Box, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppointments } from '../../../hooks/appointments/useAppointments'
import HeaderWindows from '../../shared/HeaderWindows'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useDateAppointments } from '../../../hooks/appointments/useDateAppointments'
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import AutocompleteInput from '../../AutocompleteInput';

import Select from '@mui/material/Select';
import PatientCreationForm from '../../PatientCreationForm';
import { usePatient } from '../../../hooks/patients/usePatient'

const hours = [
    '10:00', '10:15', '10:30', '10:45',
    '11:00', '11:15', '11:30', '11:45',
    '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45',
    '14:00', '14:15', '14:30', '14:45',
    '15:00', '15:15', '15:30', '15:45',
    '16:00', '16:15', '16:30', '16:45',
    '17:00', '17:15', '17:30', '17:45',
    '18:00', '18:15', '18:30', '18:45',
    '19:00', '19:15', '19:30', '19:45',
    '20:00', '20:15', '20:30', '20:45',
    '21:00', '21:15', '21:30', '21:45', '22:00'
]

const CreateAppointmentModal = () => {

    const { updateOpen, selectedCellInfo, doctorAppointmentsId,
        handleUpdateClose, getAppointmentsIdsListRanged, postCreateNewAppointment, getAgenda
    } = useAppointments()
    const { selectedDate } = useDateAppointments()
    const [isPatientRegistered, setIsPatientRegistered] = useState(true)
    const [selectedPatientInputInformation, setSelectedPatientInputInformation] = useState({}) //Autocomplete
    const [listHours, setListHours] = useState([])
    const [lowLimitHourIndex, setLowLimitHourIndex] = useState(hours.indexOf(selectedCellInfo.cellData.hour))
    const [listOfRangedIds, setListOfRangedIds] = useState([])

    const { patientsList } = usePatient()
    const [rangedHour, setRangedHour] = useState('');

    const handleHoursRanged = () => {
        const listHours = []
        const limitIndex = lowLimitHourIndex + 4

        for (let i = lowLimitHourIndex + 1; i <= limitIndex; i++) {
            listHours.push(hours[i])
        }
        setListHours(listHours)
    }

    const handleChange = (event) => {
        const value = getAppointmentsIdsListRanged(lowLimitHourIndex, event.target.value)
        setListOfRangedIds(value)
        setRangedHour(event.target.value);
    };

    const handleSeletedPatientInput = (value) => {
        setSelectedPatientInputInformation(value)
    }

    const handlePatientActivity = () => {
        setIsPatientRegistered(prev => !prev)
    }

    const handleSave = async () => {
        const appointmentData = { listOfRangedIds, doctorAppointmentsId }
        const res = await postCreateNewAppointment(appointmentData)
        const { success } = res
        if (success) {
            console.log(res)
            getAgenda()
        }
    }

    useEffect(() => {
        handleHoursRanged()
    }, [updateOpen])

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
                                <span className='text-lg ml-2 bg-white'>
                                    {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/{selectedDate.getFullYear()}

                                </span>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <span className='text-lg font-bold'>Hora de la cita: </span>
                                <span className='text-lg ml-2 '>{selectedCellInfo.cellData.hour}</span>
                                <span className='text-lg ml-2'>-</span>
                                <FormControl sx={{ minWidth: 120, height: 20, marginLeft: 1 }}>
                                    <Select
                                        value={rangedHour}
                                        onChange={handleChange}
                                        displayEmpty
                                        className='h-8'
                                    >
                                        {
                                            listHours.map(el =>
                                                <MenuItem value={el}>{el}</MenuItem>
                                            )
                                        }
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
                                <span className='text-lg ml-2 bg-white'>Dr.{selectedCellInfo.doctorInfo.doctorName} </span>
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
                                        <PatientCreationForm fromAutocomplete={undefined} patientData={undefined} handleSeletedPatientInput={undefined} />
                                    </div>
                                )
                        }
                    </div>
                    <div className="flex flex-row justify-center">
                        <Button onClick={() => handleSave()} variant="contained" component="span" color='success' className='mt-3'>
                            <span>Guardar</span>
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