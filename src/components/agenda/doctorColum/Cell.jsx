import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppointments } from '../../../hooks/appointments/useAppointments';
import { data } from 'autoprefixer';

const Cell = ({ data, doctorName, doctorAppointmentsId, doctorColumn, appointmentsAvailable, doctorSpeciality}) => {

    const { handleUpdateOpen, updateAppointementDataToBeUpdated,
        updateCurrentDoctorAppointments, handleDeleteOpen,
    } = useAppointments()

    const onHeighCellCorrection = () => {

        if (data.isDisplayed) {
            let heighClassValue = ''
            let backgroundColor = ''
            switch (Number(data.squares)) {
                case 1:
                    heighClassValue = 'h-20'
                    break;
                case 2:
                    heighClassValue = 'h-40'
                    break;
                case 3:
                    heighClassValue = 'h-60'
                    break;
                default:
            }

            switch (data.specialist) {
                case 'general':
                    backgroundColor = 'bg-blue-200'
                    break;
                case 'ortodoncia':
                    backgroundColor = 'bg-red-200'
                    break;
                case 'endodoncia':
                    backgroundColor = 'bg-gray-200'
                    break;
                case 'cirugia':
                    backgroundColor = 'bg-green-200'
                    break;
            }

            return `${heighClassValue} w-56 ${backgroundColor} border-b border-white p-2 cursor-pointer`
        }
    }

    const onAddAppointment = () => {
        handleUpdateOpen()
        updateCurrentDoctorAppointments(doctorColumn, doctorAppointmentsId)
        updateAppointementDataToBeUpdated({ data, doctorName, doctorAppointmentsId, doctorSpeciality, appointmentsAvailable })
    }

    const onDeleteAppointment = async () => {
        handleDeleteOpen()
        updateAppointementDataToBeUpdated({ data, doctorName, doctorAppointmentsId })
    }

    return (
        <>
            {
                data.isDisplayed
                    ?
                    <div className={onHeighCellCorrection()}>
                        <div className='relative flex flex-col '>
                            <div className=' flex flex-row'>
                                {   
                                    data.isOccupated
                                        ? (
                                            <>
                                            <div className="flex flex-col">
                                                <span className='text-sm '>
                                                    ({data.hour}-{data.highHour})
                                                </span>
                                                <span className="text-sm">
                                                    {data.patientFirstName}
                                                </span>
                                                <span className="text-sm">
                                                    Causa: <span className="font-bold">{data.appointmentCause}</span>
                                                </span>
                                            </div>
                                                <IconButton className='absolute bottom-5 right-0' color="secondary" aria-label="add an alarm" onClick={() => { onDeleteAppointment() }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </>
                                                
                                        )
                                        : (
                                            <IconButton className='absolute -bottom-10 right-0' color="secondary" aria-label="add an alarm" onClick={() => { onAddAppointment() }}>
                                                <AddIcon />
                                            </IconButton>
                                        )
                                }
                            </div>
                            
                        </div>
                    </div>
                    : <div>
                        <td colSpan={data.squares.toString()} className='hidden' >

                        </td>
                    </div>
            }
        </>
    )
}

export default Cell