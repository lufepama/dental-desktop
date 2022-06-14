import React, { useState, useRef, useEffect } from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import Button from '@mui/material/Button';
import NavbarItem from './NavbarItem';

const Navbar = () => {

    return (
        <div className='bg-blue-300 h-16 flex flex-row items-center'>
            <ul className='flex flex-row w-full justify-between pl-10 pr-10'>
                <li>
                    <NavbarItem icon={<AccountBoxIcon />} title='Pacientes' options={[{ title: 'Informacion del paciente', url: '/patients/create' }, { title: 'Lista de pacientes', url: '/patients/list' }]} />
                </li>
                <li>
                    <NavbarItem icon={<MedicalInformationIcon />} title='Doctores' options={[{ title: 'Informacion del doctor', url: 'patientInformationPage' }, { title: 'Lista de doctores', url: 'patientInformationPage' }]} />
                </li>
                <li>
                    <NavbarItem icon={<AirlineSeatReclineExtraIcon />} title='Tratamientos' options={[{ title: 'Pantalla dental', url: 'patientInformationPage' },
                    { title: 'Balance del paciente', url: 'patientInformationPage' },
                    { title: 'Reportes', url: 'patientInformationPage' },
                    { title: 'Reportes de saldo', url: 'patientInformationPage' },
                    ]}
                    />
                </li>
                <li>
                    <NavbarItem icon={<PointOfSaleIcon />} title='Ingresos y gastos' options={[{ title: 'Perfil', url: 'patientInformationPage' }, { title: 'Mi cuenta', url: 'patientInformationPage' }]} />
                </li>
                <li>
                    <NavbarItem icon={<AdminPanelSettingsIcon />} title='Administracion' options={[{ title: 'Informacion de la clinica', url: 'patientInformationPage' },
                    { title: 'Informacion del usuario', url: 'patientInformationPage' },
                    { title: 'Lista de usuarios', url: 'patientInformationPage' },
                    { title: 'Permisos', url: 'patientInformationPage' },
                    ]}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Navbar