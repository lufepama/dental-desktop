import React, { useEffect } from 'react'
import HeaderWindows from '../../components/shared/HeaderWindows'
import ListAltIcon from '@mui/icons-material/ListAlt';
//Table Imports
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usePatient } from '../../hooks/patients/usePatient';
import { useUpdatePatient } from '../../hooks/patients/useUpdatePatient'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Patients = () => {

    const { patientsList, fetchGetPatientList, handleDeletePatient,
        handleOpenPatientWindow,
        handleCloseWindow,
        isPatienteDeleted,
        openPatientInformationWindow,
        updateIsPatientDeleted
    } = usePatient()
    const { onUpdatePatient } = useUpdatePatient()


    useEffect(() => {
        fetchGetPatientList()
        updateIsPatientDeleted(false)
    }, [])

    return (
        <div className='w-screen h-screen bg-gray-200 flex flex-col'>
            <HeaderWindows icon={<ListAltIcon className='text-gray-100' fontSize='inherit' />} title='Lista de pacientes' />
            <div className='h-full flex flex-col justify-between overflow-y-hidden'>
                <div className='h-1/2'>
                    <TableContainer component={Paper} className='h-full' >
                        <Table sx={{ minWidth: 700, height: 250 }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell>ID - PACIENTE</StyledTableCell>
                                    <StyledTableCell align="right">Nombre</StyledTableCell>
                                    <StyledTableCell align="right">Apellidos</StyledTableCell>
                                    <StyledTableCell align="right">Sexo</StyledTableCell>
                                    <StyledTableCell align="right">Edad</StyledTableCell>
                                    <StyledTableCell align="right">Ocupacion</StyledTableCell>
                                    <StyledTableCell align="right">Direccion</StyledTableCell>
                                    <StyledTableCell align="right">Telefono</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patientsList.map((row) => (
                                    <StyledTableRow key={row._id}>
                                        <StyledTableCell component="th" scope="row">
                                            <div className='flex flex-row'>
                                                <Button onClick={() => { handleOpenPatientWindow(row) }} >
                                                    <span className='text-blue-500'><PanToolAltIcon color='inherit' /></span>
                                                </Button>
                                                <Button onClick={() => { handleDeletePatient(row._id, row.firstName) }}>
                                                    <span className='text-red-600'><DeleteIcon color='inherit' /></span>
                                                </Button>
                                                {row._id}
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                                        <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                        <StyledTableCell align="right">{row.gender}</StyledTableCell>
                                        <StyledTableCell align="right">{row.age}</StyledTableCell>
                                        <StyledTableCell align="right">{row.ocupation}</StyledTableCell>
                                        <StyledTableCell align="right">{row.address}</StyledTableCell>
                                        <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                        isPatienteDeleted && <h1>Borrado</h1>
                    }
                    {
                        <span>Se han encontrado <span className='font-bold'>{patientsList.length}</span> {patientsList.length > 1 ? 'registros' : 'registro'} </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Patients