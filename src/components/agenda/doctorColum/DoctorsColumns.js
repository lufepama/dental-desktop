import React from 'react'
import { useAppointments } from '../../../hooks/appointments/useAppointments'
import DoctorCells from './DoctorCellsList'

const DoctorsColumns = () => {

    const { appointmentsAgenda } = useAppointments()


    return (
        <>

            {
                appointmentsAgenda.map(el =>
                    <td key={el._id} >
                        <th className='flex flex-row justify-center'>
                            <tr>
                                <td>
                                    <div>
                                        <span className='text-lg'>{el.doctorName}</span>
                                    </div>
                                </td>
                            </tr>
                        </th>
                        <DoctorCells doctorAgendaId={el._id} data={el.hoursAppointments} />
                    </td>
                )
            }
        </>
    )
}

export default DoctorsColumns