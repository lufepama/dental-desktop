import React from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PatientTreatments = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex flex-row'>
                <Button variant="contained" component="span" color='success' startIcon={<AddIcon />} className='mt-3'>
                    <span>Crear nuevo tratamiento</span>
                </Button>
            </div>
        </div>
    )
}

export default PatientTreatments