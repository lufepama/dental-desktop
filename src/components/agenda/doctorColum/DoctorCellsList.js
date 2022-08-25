import React from 'react'
import Cell from './Cell'


const DoctorCells = ({ data, doctorName, doctorAppointmentsId }) => {

    return (
        <>
            {
                data.map(el => {
                    return <Cell key={el._id} doctorName={doctorName} data={el} doctorAppointmentsId={doctorAppointmentsId} doctorColumn={data} />
                }
                )
            }
        </>
    )
}

export default DoctorCells