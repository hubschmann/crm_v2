import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function TablePreviewRegistration() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        
        <TableBody>
      
            <TableRow>
                <TableCell sx={{  fontWeight: 600 }}>
                    ID
                </TableCell>
              <TableCell>#f2d45</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{  fontWeight: 600 }} >Дата</TableCell>
              <TableCell >12.02.2024</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{  fontWeight: 600 }} >Виконавець</TableCell>
              <TableCell >Євгеній Мальков</TableCell>
            </TableRow>
   
        </TableBody>
      </Table>
    </TableContainer>
  );
}
