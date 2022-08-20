import React from 'react'
import Cell from './Cell'


const DoctorCells = ({ data, doctorAgendaId }) => {



    return (
        <>
            {
                data.map(el => {
                    return <Cell key={el._id} data={el} doctorAgendaId={doctorAgendaId} />
                }
                )
            }
        </>
    )
}

export default DoctorCells