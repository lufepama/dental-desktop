import React from 'react'
import { useAppointments } from '../../../hooks/appointments/useAppointments'
import DoctorCells from './DoctorCellsList'
import CreateAppointmentModal from '../modals/CreateAppointmentModal'

const DoctorsColumns = () => {

    const { appointmentsAgenda, updateOpen} = useAppointments()


    return (
        <>

            {
                appointmentsAgenda.map(el =>
                    <td key={el._id} >
                        <th className='flex flex-row justify-center'>
                            <tr>
                                <td>
                                        <span className='text-lg'>{el.doctorName}</span>
                                </td>
                            </tr>
                        </th>
                        <DoctorCells doctorAppointmentsId={el.doctorAppointmentsId} 
                            doctorName={el.doctorName} data={el.hoursAppointments} 
                            doctorSpeciality={el.speciality} appointmentsAvailable={el.appointmentsAvailable}
                        />
                    </td>
                )
            }
        </>
    )
}

export default DoctorsColumns