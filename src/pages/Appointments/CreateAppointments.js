import React, { useState, useRef } from 'react'
import HeaderWindows from '../../components/HeaderWindows'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDoctor } from '../../hooks/doctors/useDoctors'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const CreateAppointments = () => {

    const doctorRef = useRef()
    const timeAppointmentRef = useRef()
    const { doctorsList } = useDoctor()
    const [selectedDoctorId, setSelectedDoctorId] = useState('')
    const [value, _] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState({
        selectedDay: null,
        selectedMonth: null,
        selectedTime: ''
    })

    const [selectedPatientId, setSelectedPatientId] = useState('')

    const { selectedDay, selectedMonth, selectedTime } = selectedDate

    const handleDoctorIdChange = (e) => {
        setSelectedDoctorId(e.target.value)
    }
    const handleSelectedPatientIdChange = (e) => {
        setSelectedPatientId(e.target.value)
    }

    const handleTimeAppointmentChange = (name) =>
        (event) => {
            setSelectedDate({ ...selectedDate, [name]: event.target.value })
        };

    const handleCalendarChange = (e) => {
        const month = MONTHS[(e.getUTCMonth())]
        setSelectedDate({ ...selectedDate, selectedDay: (e.getUTCDate() + 1), selectedMonth: month })
    }

    return (
        <div className='w-screen h-screen bg-gray-200'>
            <HeaderWindows icon={<MenuBookIcon className='text-gray-100' fontSize='inherit' />} title='Crear nueva cita' />
            <div className='flex flex-row h-full h-full'>
                <div className='flex flex-col  w-1/2 h-2/3 bg-gray-100 p-4'>
                    <span className='font-bold'>Doctor</span>
                    <select ref={doctorRef} onChange={handleDoctorIdChange} value={selectedDoctorId}>
                        {
                            doctorsList.map((doct) => <option key={doct._id} value={doct._id}>{doct.lastName}, {doct.firstName} </option>)
                        }
                    </select>
                    <span className='font-bold'>Selecciona un dia</span>
                    <div className='flex flex-row justify-center mt-4'>
                        <div className='w-2/3 h-2/3'>
                            <Calendar onChange={handleCalendarChange} value={value} />
                        </div>
                    </div>
                    <span className='font-bold'>Selecciona una hora</span>
                    <select ref={timeAppointmentRef} onChange={handleTimeAppointmentChange('selectedTime')} id="timeAppointmentRef" value={selectedTime}>
                        <option value={'7:00-7:30'}  >7:00 - 7:30</option>
                    </select>
                </div>
                <div className='w-1/2 h-2/3 bg-red-100 p-4'>
                    <div className='flex flex-col w-1/2'>
                        <span className='font-bold'>ID del paciente</span>
                        <div className='flex flex-row'>
                            <input disabled={true} className='h-8 border-2 border-gray-600' type='text' value={selectedPatientId} onChange={handleSelectedPatientIdChange} />
                            <Button>
                                <span className='text-blue-500'><ContentPasteSearchIcon color='inherit' /></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAppointments