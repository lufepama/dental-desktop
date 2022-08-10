import React, { useState } from 'react'
import { useEffect } from 'react'
import { usePatientHistory } from '../../hooks/patienthistory/usePatientHistory'
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ActionFieldHeader from '../../components/patientprofile/ActionFieldHeader'
import Avatar from '@mui/material/Avatar';
import { useActiveWindow } from '../../hooks/activewindow/useActiveWindow'
import HeaderHistory from '../../components/patienthistory/HeaderHistory'

const SubheaderSection = ({ title }) => {
    return (
        <div className='mt-5 flex flex-row justify-center'>
            {title}
        </div>
    )
}

const PatientHistory = () => {

    const { currentPatientInformation } = usePatientHistory()
    const { displayActiveWindowPatient, updateActiveWindowPatient } = useActiveWindow()
    const [activeTitle, setActiveTitle] = useState('Datos personales')

    const onSubmitHeaderBottom = (title) => {
        if (title) {
            setActiveTitle(title)
            updateActiveWindowPatient(title)
        }
    }

    useEffect(() => {
        console.log('patientID', currentPatientInformation)

    }, [])

    return (
        <div className='h-screen w-screen pl-20 pr-20 pt-10 z-10'>
            <div className='flex flex-row h-full w-full'>
                <div className='flex flex-col w-1/5 h-full '>
                    <div className='flex flex-row items-center w-full h-32'>
                        <Avatar sx={{ height: '120px', width: '120px', zIndex: '0' }} alt={`${currentPatientInformation.firstName}`} src={currentPatientInformation.profileImg} />
                        <span className='ml-3 font-bold'>{currentPatientInformation.firstName} {currentPatientInformation.lastName}</span>
                    </div>
                    <div className='flex flex-col'>
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Datos personales' onSubmit={onSubmitHeaderBottom} />
                        <ActionFieldHeader icon={<PermContactCalendarIcon sx={{ fontSize: 30, color: 'black' }} />} title='Imagenes y archivos' onSubmit={onSubmitHeaderBottom} />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Citas' onSubmit={onSubmitHeaderBottom} />
                        <SubheaderSection title='Informacion clinica' />
                        <div className=''>
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Planes de tratamiento' onSubmit={onSubmitHeaderBottom} />
                            {/* <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Evoluciones' onSubmit={onSubmitHeaderBottom} /> */}
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Odontograma actual' onSubmit={onSubmitHeaderBottom} />
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Documentos clinicos' onSubmit={onSubmitHeaderBottom} />
                            {/* <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Alertas' onSubmit={onSubmitHeaderBottom} /> */}
                        </div>
                        <SubheaderSection title='Facturas' />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Facturas anteriores' onSubmit={onSubmitHeaderBottom} />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Pagos recibidos' onSubmit={onSubmitHeaderBottom} />
                    </div>
                </div>
                <div className='flex flex-col h-full w-4/5 '>
                    <HeaderHistory title={activeTitle} />
                    <div className='h-full'>
                        {displayActiveWindowPatient()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientHistory