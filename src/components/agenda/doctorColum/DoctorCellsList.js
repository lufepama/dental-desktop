import React from 'react'
import Cell from './Cell'


const DoctorCells = ({ data }) => {

    return (
        <>
            {
                data.map(el =>
                    <Cell data={el} />
                )
            }
        </>
    )
}

export default DoctorCells