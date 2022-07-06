import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Input = styled('input')({
    display: 'none',
});

const PatientImageForm = ({ onFileUpload, setImage, title }) => {

    // const [image, setImage] = useState(null)
    // const { hasUserCreated } = usePatient()

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
        <div className='w-full'>
            <form>
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFileChange}
                    />
                    <Button variant="contained" component="span" startIcon={<UpgradeIcon />} className='mt-3'>
                        <span>{title}</span>
                    </Button>
                </label>
            </form>
        </div>
    )
}

export default PatientImageForm