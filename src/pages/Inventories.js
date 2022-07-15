import React from 'react'

import { Typography } from '@mui/material';

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

const columns = [
  { id: 'designation', label: 'Désignation', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 100 },
  {
    id: 'emplacement',
    label: 'Emplacement',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'code',
    label: 'Code',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'section',
    label: 'Section',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'nbcarton',
    label: 'Nombre de Carton',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'qte',
    label: 'Quantité',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'qtedispo',
    label: 'Quantité Disponible',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'prixdachat',
    label: 'Prix d\'achat',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'prixlocation',
    label: 'Prix de location',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'prixcasse',
    label: 'Prix de casse',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'consigne',
    label: 'Consigne',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'section',
    label: 'Section',
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

function createData(designation, type, emplacement, code, section, nbcarton, qte, qtedispo, prixdachat, prixlocation,prixcasse, consigne) {
  return { designation, type, emplacement, code, section, nbcarton, qte, qtedispo, prixdachat, prixlocation,prixcasse, consigne};
}

const rows = [
  createData('Table', 'Ronde', 'Dépôt C','','Table','','50','50','250000','5000','500000'),
  createData('Table', 'Carré', 'Dépôt B','','Table','','50','50','250000','5000','500000'),
  createData('Table', 'Ronde', 'Dépôt C','','Table','','50','50','250000','5000','500000'),
  createData('Table', 'Carré', 'Dépôt B','','Table','','50','50','250000','5000','500000'),
];


function Inventories() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const breadcrumbs = [
    <Typography key="1">
      Dashboard
    </Typography>,
    <Typography key="2">
      Magasin
    </Typography>,
    <Typography key="3" color="text.primary">
      Inventaires
    </Typography>,
  ];

  return (
    <div>
      <Typography variant="h3" sx={{ px: 5, mt: 1, mb: 5 }}>
          Inventaires des matériels
          <Typography variant="h4" sx={{ px: 5, mt: 2, ml:-5, mb: 2 }}>
            Inventaire
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
          >
            Nouvel Enregistrement 
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

export default Inventories