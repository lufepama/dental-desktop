import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppointments } from '../../../hooks/appointments/useAppointments';

const Cell = ({ data, doctorName, doctorAppointmentsId, doctorColumn }) => {

    const { handleUpdateOpen, updateAppointementDataToBeUpdated,
        getArrayOfCellsInRangedAppointment, updateCurrentDoctorAppointments
    } = useAppointments()

    const onHeighCellCorrection = () => {

        if (data.isDisplayed) {
            let heighClassValue = ''
            let backgroundColor = ''
            switch (Number(data.squares)) {
                case 1:
                    heighClassValue = 'h-16'
                    break;
                case 2:
                    heighClassValue = 'h-32'
                    break;
                case 3:
                    heighClassValue = 'h-64'
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

    const onEditAppointment = () => {
        handleUpdateOpen()
        updateAppointementDataToBeUpdated(data)
    }

    const onAddAppointment = () => {
        handleUpdateOpen()
        updateCurrentDoctorAppointments(doctorColumn, doctorAppointmentsId)
        updateAppointementDataToBeUpdated({ data, doctorName, doctorAppointmentsId })
        getArrayOfCellsInRangedAppointment()
    }

    const onDeleteAppointment = () => {
        handleUpdateOpen()
        updateAppointementDataToBeUpdated(data)
    }


    return (
        <>
            {
                data.isDisplayed
                    ?
                    <div className={onHeighCellCorrection()}>
                        <div className='relative flex flex-col'>
                            <div className='absolute bottom-3 right-0 flex flex-row'>
                                {
                                    data.isOccupated
                                        ? (
                                            <>
                                                <IconButton color="secondary" aria-label="add an alarm" onClick={() => { onDeleteAppointment() }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="secondary" aria-label="add an alarm" onClick={() => { onEditAppointment() }}>
                                                    <EditIcon />
                                                </IconButton>
                                            </>

                                        )
                                        : (
                                            <IconButton color="secondary" aria-label="add an alarm" onClick={() => { onAddAppointment() }}>
                                                <AddIcon />
                                            </IconButton>
                                        )
                                }

                            </div>

                            <span className='text-sm'>patient {data.patientId}</span>
                            <span className='text-xs'>patient {data.patientId}</span>
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