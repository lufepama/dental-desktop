import React, { useState, useRef, useEffect } from 'react'
import HeaderWindows from '../../components/shared/HeaderWindows'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDoctor } from '../../hooks/doctors/useDoctors'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import PatientCreationForm from '../../components/PatientCreationForm';
import { usePatient } from '../../hooks/patients/usePatient';
import AutocompleteInput from '../../components/AutocompleteInput';

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


const CreateAppointments = () => {

    const doctorRef = useRef()
    const { patientsList, fetchGetPatientList } = usePatient()
    const typeAppointmentRef = useRef()
    const timeAppointmentRef = useRef()
    const [isPatientRegistered, setIsPatientRegistered] = useState(true)
    const [specialist, setSpeacialist] = useState('')
    const { doctorsList } = useDoctor()
    const [selectedDoctorId, setSelectedDoctorId] = useState('')
    const [value, _] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState({
        selectedDay: null,
        selectedMonth: null,
        selectedTime: '7:00-7:30'
    })
    const [selectedPatientInputInformation, setSelectedPatientInputInformation] = useState({})

    const { selectedTime } = selectedDate

    const handlePatientActivity = () => {
        setIsPatientRegistered(prev => !prev)
    }

    const handleDoctorIdChange = (e) => {
        setSelectedDoctorId(e.target.value)
    }

    const handleSpeciality = (e) => {
        setSpeacialist(e.target.value)
    }

    const handleTimeAppointmentChange = (name) =>
        (event) => {
            setSelectedDate({ ...selectedDate, [name]: event.target.value })
        };

    const handleCalendarChange = (e) => {
        const month = MONTHS[(e.getUTCMonth())]
        setSelectedDate({ ...selectedDate, selectedDay: (e.getUTCDate() + 1), selectedMonth: month, selectedTime: selectedTime })
    }

    const handleSeletedPatientInput = (value) => {
        console.log('vvvv', value)
        setSelectedPatientInputInformation(value)
    }

    const onRegisterAppointment = async () => {
        const response = await window.api.openDialogPatientCreation(selectedPatientInputInformation?.firstName)

        if (response) {
            const fullAppointmentData = Object.assign({}, selectedDate, selectedPatientInputInformation)
            console.log('full', fullAppointmentData)
        }
    }

    useEffect(() => {
        fetchGetPatientList()
    }, [])

    return (
        <div className='flex flex-col w-screen h-screen bg-gray-200'>
            <HeaderWindows icon={<MenuBookIcon className='text-gray-100' fontSize='inherit' />} title='Crear nueva cita' />
            <div className='flex flex-row h-full'>
                <div className='flex flex-col w-1/2 bg-gray-100 p-4'>
                    <div className='flex flex-row justify-center'>
                        <span>Cita clinica</span>
                    </div>
                    <span className='font-bold'>Doctor</span>
                    <select ref={doctorRef} onChange={handleDoctorIdChange} value={selectedDoctorId}>
                        {
                            doctorsList.map((doct) => <option key={doct._id} value={doct._id}>{doct.lastName}, {doct.firstName} </option>)
                        }
                    </select>
                    <span className='font-bold'>Tipo de cita</span>

                    <select ref={typeAppointmentRef} onChange={handleSpeciality} value={specialist}>
                        <option value='Ortodoncia'>Ortodoncia</option>
                        <option value='Genearl'>General</option>
                    </select>
                    <span className='font-bold'>Selecciona una hora</span>
                    <select ref={timeAppointmentRef} onChange={handleTimeAppointmentChange('selectedTime')} id="timeAppointmentRef" value={selectedTime}>
                        <option value={'7:00-7:30'}  >7:00 - 7:30</option>
                    </select>
                    <span className='font-bold'>Selecciona un dia</span>
                    <div className='flex flex-row justify-center mt-4'>
                        <div className='w-2/3 h-2/3'>
                            <Calendar onChange={handleCalendarChange} value={value} />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-4'>
                    <div className='flex flex-row justify-center'>
                        <span>Informacion del paciente</span>
                    </div>
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
                            ? <div className='flex flex-col w-full'>
                                <span className='font-bold'></span>
                                <div className='w-1/2'>
                                    <AutocompleteInput patientsList={patientsList} handleSeletedPatientInput={handleSeletedPatientInput} />
                                </div>
                                <div>
                                    <PatientCreationForm fromAutocomplete={true} patientData={selectedPatientInputInformation} />
                                </div>
                            </div>
                            : <PatientCreationForm fromAutocomplete={false} handleSeletedPatientInput={handleSeletedPatientInput} />
                    }
                    <div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <Button onClick={() => onRegisterAppointment()} >
                    <span className='text-blue-500'><ContentPasteSearchIcon color='inherit' />Registrar nueva cita</span>
                </Button>
                <Button>
                    <span className='text-blue-500'><ContentPasteSearchIcon color='inherit' />Reset</span>
                </Button>
                <Button>
                    <span className='text-blue-500'><ContentPasteSearchIcon color='inherit' />Cerrar</span>
                </Button>
            </div>
        </div>
    )
}



export default CreateAppointments