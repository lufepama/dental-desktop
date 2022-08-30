import React from 'react'
import Cell from './Cell'

const DoctorCells = ({ data, doctorName, doctorAppointmentsId, doctorSpeciality, appointmentsAvailable }) => {

    return (
        <>
            {
                data.map(el => {
                    return <Cell key={el._id} doctorName={doctorName} 
                    data={el} doctorAppointmentsId={doctorAppointmentsId} doctorColumn={data}
                    appointmentsAvailable={appointmentsAvailable} doctorSpeciality={doctorSpeciality}
                    />
                }
                )
            } 
        </>
    )
}

export default DoctorCells