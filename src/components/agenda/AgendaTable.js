import React from 'react'
import TimeColumn from './timeColumn/TimeColumn'
import DoctorsColumns from './doctorColum/DoctorsColumns'

const AgendaTable = () => {


    return (
        <div className='w-full h-full bg-blue-100 overflow-scroll overflow-x-hidden'>
            <table >
                <tr>
                    <td >
                        <th >
                            <tr >
                                <td >
                                    <span className='text-lg'>Hora</span>
                                </td>
                            </tr>
                        </th>
                        <TimeColumn />
                    </td>
                    <DoctorsColumns />
                </tr>
            </table>
        </div>

    )
}

export default AgendaTable