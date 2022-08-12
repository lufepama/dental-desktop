import React from 'react'

const Cell = ({ data }) => {
    return (
        <>
            <table key={data._id} className='h-16 w-56 bg-red-300 border-b' onClick={() => { console.log('pressed', data) }}>
                <tbody >
                    <tr>
                        <div className='h-full bg-blue-200 p-2'>
                            <span>patient {data.patientId}</span>
                        </div>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Cell