import React, { useState } from 'react'
import { usePatient } from '../hooks/patients/usePatient'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
    display: 'none',
});

const PatientImageForm = ({ onFileUpload }) => {

    const [image, setImage] = useState(null)
    const { hasUserCreated } = usePatient()

    const handleFileChange = (e) => {
        try {
            const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                data: e.target.files[0],
            }
            setImage(img)
            onFileUpload(img.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className='w-full h-full bg-gray-300'>
            <form>
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFileChange}
                    />
                    <Button variant="contained" component="span">
                        Subir foto
                    </Button>
                </label>
            </form>
            {hasUserCreated && image?.preview && <img src={image.preview} width='100' height='100' />}
        </div>
    )
}

export default PatientImageForm