import React, { useRef, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AutocompleteInput({ patientsList, handleSeletedPatientInput }) {

    const inputRef = useRef()
    const [selectedPatient, setSelectedPatient] = useState({})

    return (
        <div className='w-full'>
            <Autocomplete
                sx={{
                    display: 'inline-block',
                    '& input': {
                        width: '90%',
                        bgcolor: 'background.paper',
                        color: (theme) =>
                            theme.palette.getContrastText(theme.palette.background.paper),
                    },
                }}
                id="custom-input-demo"
                noOptionsText="No se ha encontrado a ningun paciente..."
                options={patientsList}
                className='w-full'
                onChange={(e, value) => handleSeletedPatientInput(value)}
                getOptionLabel={(option) => option.firstName}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref} className='w-full'>
                        <input ref={inputRef} type="text" {...params.inputProps} className='h-10 w-full' />
                        <ArrowDropDownIcon />
                    </div>

                )}
            />

        </div>
    );
}
