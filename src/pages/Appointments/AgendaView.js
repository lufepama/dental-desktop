import React, { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'
import Button from '@mui/material/Button';
import AgendaTable from '../../components/agenda/AgendaTable'
import { useAppointments } from '../../hooks/appointments/useAppointments'
import CreateAppointmentModal from '../../components/agenda/modals/CreateAppointmentModal';
import { useDateAppointments } from '../../hooks/appointments/useDateAppointments'

registerLocale('es', es)

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const AgendaView = () => {

    const { onChangeSelectedDate, startDate } = useDateAppointments()
    const { getAgenda } = useAppointments()

    const getDayTime = () => {
        const dayNumber = startDate.getDay()
        const dayOfWeek = days[dayNumber]
        return (
            <>
                <span className='font-bold text-5xl'>{startDate.toDateString().substring(8, 10)}</span>
                <span className='font-bold text-2xl'>{dayOfWeek}</span>
                <span className=' text-2xl'>{startDate.getFullYear()}</span>
            </>
        )
    }


    useEffect(() => {
        getAgenda()
    }, [])

    return (
        <>

            <div className='w-full h-full flex flex-row bg-gray-200'>

                <div className='w-1/5 flex flex-col items-center bg-red-100 p-10'>
                    <div className='w-2/3 flex flex-col items-center bg-gray-100 rounded-lg shadow-md'>
                        {getDayTime()}
                    </div>
                    <div className='mt-10'>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => onChangeSelectedDate(date)}
                            inline
                            locale='es'
                        />
                    </div>
                    <Button variant="contained" component="span" color='success' className='mt-3'>
                        <span>Seleccionar dia</span>
                    </Button>
                </div>
                <div className='w-4/5 flex flex-row bg-gray-300 p-10'>
                    <AgendaTable />
                </div>
                <CreateAppointmentModal />
            </div>
        </>

    )
}

export default AgendaView