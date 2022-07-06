import React, { useEffect, useRef, useState } from 'react'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Button } from '@mui/material';
import { usePatient } from '../../hooks/patients/usePatient'
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HeaderWindows from '../../components/HeaderWindows';
import PatientImageForm from '../../components/PatientImageForm';



const CreatePatient = () => {

    const sexRef = useRef()
    const { postCreateNewPatient, onUserCreated, hasUserCreated } = usePatient()
    const [creationMessage, setCreationMessage] = useState({
        isSuccess: false,
        successMessage: ''
    })
    const [image, setImage] = useState(null)
    const [patientData, setPatientData] = useState({
        firstName: 'Felipe',
        lastName: 'Paz martinez',
        phoneNumber: '1234234234',
        ocupation: 'desempleado',
        gender: 'Masculino',
        age: 0,
        address: 'calle',
        patientImg: null
    })
    const { isSuccess, successMessage } = creationMessage
    const { firstName, lastName, gender, age, ocupation, address, phoneNumber, patientImg } = patientData

    const handleChange = (name) =>
        (event) => {
            setPatientData({ ...patientData, [name]: event.target.value })
        };

    const onFileUpload = (formData) => {
        onUserCreated(true)
        setPatientData({ ...patientData, patientImg: formData })
    }

    const handleSubmit = async () => {
        const creationText = `Seguro que quieres registrar a ${firstName} como paciente?`
        const response = await window.api.openDialogPatientCreation(creationText)
        if (response) { handleCreation() }
    }

    const handleCreation = async () => {
        const response = await postCreateNewPatient(patientData)
        const { success } = response
        if (success) {
            onUserCreated(false)
            setCreationMessage({ isSuccess: true, successMessage: 'Se ha creado el nuevo paciente' })
            setPatientData({ ...patientData, firstName: '', lastName: '', phoneNumber: '', occupation: '', age: 0, address: '' })
        }
    }

    const handleReset = () => {
        setPatientData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            ocupation: '',
            gender: '',
            age: 0,
            address: '',
            patientImg: null
        })
    }

    useEffect(() => {
        onUserCreated(true)
        console.log('immm', image)
    }, [image])


    return (
        <div className='w-screen h-screen bg-gray-200'>
            <HeaderWindows icon={<SupervisedUserCircleIcon className='text-gray-100' fontSize='inherit' />} title='Informacion del paciente' />
            {
                isSuccess && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        {successMessage}
                    </Alert>
                )
            }

            <div className='w-full h-2/3 flex flex-row p-5'>
                <div className='w-1/3 bg-gray-100'>
                    <div className='flex flex-col'>
                        <span>Nombre del paciente</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={firstName} onChange={handleChange('firstName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Apellidos del paciente</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={lastName} onChange={handleChange('lastName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Sexo</span>
                        <select id="sex" name="sex" ref={sexRef} onChange={handleChange('gender')} value={gender}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femeino</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <span>Edad</span>
                        <input className='h-8 border-2 border-gray-600' type='text' value={age} onChange={handleChange('age')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Ocupacion</span>
                        <input className='h-8 border-2 border-gray-600' value={ocupation} onChange={handleChange('ocupation')} />
                    </div>
                </div>
                <div className='w-1/3 ml-5 mr-3'>
                    <div className='flex flex-col'>
                        <span>Direccion</span>
                        <input className='h-8 border-2 border-gray-600' value={address} onChange={handleChange('address')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Numero de contacto</span>
                        <input className='h-8 border-2 border-gray-600' value={phoneNumber} onChange={handleChange('phoneNumber')} />
                    </div>
                </div>
                <div className='w-1/5 bg-red-400 p-2'>
                    {hasUserCreated && image?.preview && <img src={image.preview} width='100' height='100' className='' />}
                    <PatientImageForm onFileUpload={onFileUpload} setImage={setImage} title='Subir una foto' />
                </div>
            </div>
            <div className='h-1/5 flex flex-row justify-center items-center'>
                <Button onClick={handleSubmit}>Guardar</Button>
                <Button onClick={handleReset}>Reiniciar</Button>
            </div>

        </div>
    )
}

export default CreatePatient