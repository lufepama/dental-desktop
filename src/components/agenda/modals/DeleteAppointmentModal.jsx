import React from 'react'
import { Box, Modal, Button } from '@mui/material'
import { useAppointments } from '../../../hooks/appointments/useAppointments'
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteAppointmentModal = () => {

  const { deleteOpen, selectedCellInfo, handleDeleteClose, 
    deleteAppointment, getAgenda
  } = useAppointments()

  const { patientFirstName }= selectedCellInfo.cellData



  const onDeleteAction = async () => {

    const dataToSend = {
      doctorAppointmentsId:selectedCellInfo.doctorInfo.doctorAppointmentsId, 
      listOfRangedIds: selectedCellInfo.cellData.listOfRangedIds
    }

    const resp = await deleteAppointment(dataToSend)
    const {success} = resp

    if (success) {
      getAgenda()
      handleDeleteClose()
    }
  }

  return (
    <div>
      <Modal
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='w-1/3 h-1/3 flex flex-col absolute 
                        top-2/3 left-2/3 -mt-56 -ml-96 bg-gray-100'>
          <div className="flex flex-col">
            <div className="flex flex-row p-3 border-b-2">
              <DeleteIcon />
              <h2 className="ml-3">Eliminar cita</h2>
            </div>
            <div className="flex  flex-col justify-between p-5">
              <span>Estas seguro que deseas borrar la cita de { patientFirstName}?
                </span>
              <div className='flex flex-row justify-center mt-10'>
                <Button onClick={() => onDeleteAction()} variant="contained" component="span" color='error' className='mt-3'>
                  <span>Eliminar</span>
                </Button>
                <Button onClick={() => { handleDeleteClose() }} variant="contained" component="span" color='primary' className='mt-3 ml-3'>
                  <span>Cancelar</span>
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DeleteAppointmentModal