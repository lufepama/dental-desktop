import React, { useState, useRef } from 'react'

const PatientCreationForm = ({ fromAutocomplete, patientData, handleSeletedPatientInput }) => {

    const [patientInformation, setPatientInformation] = useState({
        firstName: '',
        lastName: '',
        gender: fromAutocomplete ? patientData?.gender : 'dasd',
        age: '',
        ocupation: '',
        address: '',
        phoneNumber: ''
    })
    const genderRef = useRef()

    const { firstName, lastName, gender, age, ocupation, address, phoneNumber } = patientInformation

    const handleChange = (name) =>
        (event) => {
            setPatientInformation({ ...patientInformation, [name]: event.target.value })
            handleSeletedPatientInput(patientInformation)
        };

    return (
        <div className='bg-gray-200 h-full'>
            <div className='w-full h-2/3 flex flex-row '>
                <div className='w-1/2'>
                    <div className='flex flex-col'>
                        <span>Nombre del paciente</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.firstName : ''} className='h-8 border-2 border-gray-600' type='text' value={firstName} onChange={handleChange('firstName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Apellidos del paciente</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.lastName : ''} className='h-8 border-2 border-gray-600' type='text' value={lastName} onChange={handleChange('lastName')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Sexo</span>
                        <select disabled={fromAutocomplete} id="sex" name="sex" ref={genderRef} onChange={handleChange('gender')} value={gender}>
                            <option value="none" hidden>Genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <span>Edad</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.age : ''} className='h-8 border-2 border-gray-600' type='text' value={age} onChange={handleChange('age')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Ocupacion</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.ocupation : ''} className='h-8 border-2 border-gray-600' value={ocupation} onChange={handleChange('ocupation')} />
                    </div>
                </div>
                <div className='w-1/2 ml-5 mr-3'>
                    <div className='flex flex-col'>
                        <span>Direccion</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.address : ''} className='h-8 border-2 border-gray-600' value={address} onChange={handleChange('address')} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Numero de contacto</span>
                        <input disabled={fromAutocomplete} placeholder={fromAutocomplete ? patientData?.phoneNumber : ''} className='h-8 border-2 border-gray-600' value={phoneNumber} onChange={handleChange('phoneNumber')} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PatientCreationForm