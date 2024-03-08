import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Paper, Chip } from '@mui/material';

// utils
import formatStatusTime from '../../../utils/formatStatusTime';


const styles = {
    tableDetailColumnLeft: {
        width: '30%',
        fontWeight: 600,
    },
    tableDetailColumnRight: {
        width: '70%',
      }
}

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



export default function TableDetailTicket({ticket}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        
        <TableBody>
            <StyledTableRow>
              <StyledTableCell style={styles.tableDetailColumnLeft} component="th" scope="row">
                Опис
              </StyledTableCell>
              <StyledTableCell style={styles.tableDetailColumnRight}>{ticket.description ? ticket.description : 'не вказано'}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
                <StyledTableCell style={styles.tableDetailColumnLeft} component="th" scope="row">
                    ПІБ клієнта
                </StyledTableCell>
                <StyledTableCell style={styles.tableDetailColumnRight}>
                    {ticket.fio ? ticket.fio : 'не вказано'}
                </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
                <StyledTableCell style={styles.tableDetailColumnLeft} component="th" scope="row">
                    Час існування
                </StyledTableCell>
                <StyledTableCell style={styles.tableDetailColumnRight}>
                    {formatStatusTime(ticket.status_time)}
                </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell style={styles.tableDetailColumnLeft} component="th" scope="row">
                Роутер
              </StyledTableCell>
              <StyledTableCell style={styles.tableDetailColumnRight}>
                {ticket.router ? (
                    <Chip label="Наш" color="success" />
                    )  : (
                    <Chip label="Абонентський" color="warning" />
                    )
                }
              </StyledTableCell>
            </StyledTableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
