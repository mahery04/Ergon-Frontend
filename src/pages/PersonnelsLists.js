import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const columns = [
  { id: 'id', label: 'Id', minWidth: 170, align: 'right' },
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'prenom',
    label: 'Prénom',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'datenaissance',
    label: 'Date de naissance',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'lieunaissance',
    label: 'Lieu de naissance',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'cin',
    label: 'CIN',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'cindate',
    label: 'CIN Date de délivrance',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'cinrecto',
    label: 'CIN Recto',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'cinverso',
    label: 'CIN Verso',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'certificat',
    label: 'Certificat de résidence',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'lieures',
    label: 'Lieu de résidence',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'contact1',
    label: 'Contact 1',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'contact2',
    label: 'Contact 2',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'mail',
    label: 'Email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
  },
  
];

function createData(id,nom,prenom,datenaissance,lieunaissance,cin,cindate,cinrecto,cinverso,certificat,lieures,contact1,contact2,mail) {
  return { id,nom,prenom,datenaissance,lieunaissance,cin,cindate,cinrecto,cinverso,certificat,lieures,contact1,contact2,mail };
}

const rows = [
  createData('001', 'Rakoto', 'Rabe','12/02/1999','Antananarivo','102202232233','12/02/2009','','','','Ankerana','0321212323','0331212323','rabe@gmail.com'),
];

function PersonnelsLists() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [employees, setEmployee] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getEmployees = () => {
    axios.get('http://localhost:8000/employee/personnel',{
      headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
      }
    })
    .then((res) => {
      setEmployee(res.data);
      console.log("LISTES DES EMPLOYEES => ",  res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getEmployees();
  })
  

  const breadcrumbs = [
    <Typography key="1">
      Dashboard
    </Typography>,
    <Typography key="2">
      Personnel
    </Typography>,
    <Typography key="3" color="text.primary">
      Employé(e)
    </Typography>,
  ];
  return (
    <div>
      <Typography variant="h3" sx={{ px: 5, mt: 1, mb: 5 }}>
        Listes des employé(e)s
        <Typography variant="h4" sx={{ px: 5, mt: 2, ml:-5, mb: 2 }}>
          Empoyé(e)s
        </Typography>
        <Stack spacing={2}>
          <Breadcrumbs separator="." aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>

        <Button 
          size="medium" 
          variant="outlined" 
          color="primary" 
          sx={{ mr: 10, ml:150, mt:-10, width: 250}} 
          startIcon={<AddIcon/>} 
          href="/dashboard/new_employee"
        >
          Nouveau employé
        </Button>
      </Typography>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default PersonnelsLists