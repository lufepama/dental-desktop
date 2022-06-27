import React from 'react'
import { useEffect } from 'react'
import { usePatientHistory } from '../../hooks/patienthistory/usePatientHistory'
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ActionFieldHeader from '../../components/patientprofile/ActionFieldHeader'


const SubheaderSection = ({ title }) => {
    return (
        <div className='mt-5 flex flex-row justify-center'>
            {title}
        </div>
    )
}

const PatientHistory = () => {

    const { currentPatientInformation } = usePatientHistory()

    const onSubmitHeaderBottom = () => {
        console.log('clicke')
    }

    useEffect(() => {

        console.log('patientID', currentPatientInformation)

    }, [])

    return (
        <div className='h-screen w-screen bg-red-100 p-24'>
            <div className='flex flex-row h-full w-full bg-gray-100'>
                <div className='flex flex-col w-1/5 h-full bg-green-200'>
                    <div className='flex flex-col w-full h-32 bg-red-200'>
                        <span>Foto</span>
                        <span>{currentPatientInformation.firstName}</span>
                    </div>
                    <div className='flex flex-col'>
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Datos personales' onSubmit={onSubmitHeaderBottom()} />
                        <ActionFieldHeader icon={<PermContactCalendarIcon sx={{ fontSize: 30, color: 'black' }} />} title='Imagenes y archivos' onSubmit={onSubmitHeaderBottom()} />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Citas' onSubmit={onSubmitHeaderBottom()} />
                        <SubheaderSection title='Informacion clinica' />
                        <div className=''>
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Planes de tratamiento' onSubmit={onSubmitHeaderBottom()} />
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Evoluciones' onSubmit={onSubmitHeaderBottom()} />
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Odontograma actual' onSubmit={onSubmitHeaderBottom()} />
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Documentos clinicos' onSubmit={onSubmitHeaderBottom()} />
                            <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Alertas' onSubmit={onSubmitHeaderBottom()} />
                        </div>
                        <SubheaderSection title='Facturas' />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Facturas anteriores' onSubmit={onSubmitHeaderBottom()} />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Pagos recibidos' onSubmit={onSubmitHeaderBottom()} />
                        <ActionFieldHeader icon={<PersonIcon sx={{ fontSize: 30, color: 'black' }} />} title='Alertas' onSubmit={onSubmitHeaderBottom()} />
                    </div>
                </div>
                <div className='flex flex-col w-4/5 '>
                    <div className='flex flex-row justify-center h-12 w-full bg-red-200'>
                        Texto dinamico
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientHistory