import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useAppointments } from '../../../hooks/appointments/useAppointments'


const UpdateAppointmentModal = () => {

    const { updateOpen,
        handleUpdateClose, } = useAppointments()

    return (
        <Modal
            open={updateOpen}
            onClose={handleUpdateClose}
            aria-labelledby="modal-modal-title"
        >
            <Box className='w-112 h-56 flex flex-col absolute 
                        top-1/2 left-1/2 -mt-28 -ml-56 bg-gray-100'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

export default UpdateAppointmentModal