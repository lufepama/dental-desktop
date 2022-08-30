import React from 'react'
import TimeColumn from './timeColumn/TimeColumn'
import DoctorsColumns from './doctorColum/DoctorsColumns'

const AgendaTable = () => {


    return (
        <div className='w-full h-full bg-blue-100 overflow-scroll overflow-x-hidden'>
            <table >
                <td >
                        <tr >
                            <td >
                                <span className='text-lg'>Hora</span>
                            </td>
                        </tr>
                    <TimeColumn />
                </td>
                <DoctorsColumns />
            </table>
        </div>
    )
}

export default AgendaTable