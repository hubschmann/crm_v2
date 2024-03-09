import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
// components global
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { Box, Typography, Grid, Chip, Input } from '@mui/material';

// components local
import TablePreviewRegistration from './TablePreviewRegistration';
import TableDetailTicket from './TableDetailTicket';
import CalendarPicker from '../../molecules/CalendarPicker';

// utils
import getTypeTicket from '../../../utils/checkTypeTicket';
import formatDate from '../../../utils/formatDate';

// API
import API from '../../../database/api'

// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CheckCircleOutline, ErrorOutline, Event } from '@mui/icons-material';




function Row(props) {
  const { ticket } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      
      <TableRow sx={{ '& > *': { borderBottom: 'unset',
      backgroundColor: ticket.status ? 'rgba(76, 175, 80, 0.2)' :'transparent'
     },
    
      }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="right">{getTypeTicket(ticket.type_of_ticket)}</TableCell>
          <TableCell align="right">
            <Chip label={ticket.city.name} variant="outlined" />
          </TableCell>
          <TableCell align="right">{ticket.address}</TableCell>
          <TableCell align="right">{ticket.phone}</TableCell>
          <TableCell align="right">
            {formatDate(ticket.created)}
          </TableCell>
          <TableCell align="right">
                {ticket.status ? (
                  <IconButton aria-label="done">
                    <CheckCircleOutline />
                  </IconButton>
                  ) : (
                  <IconButton aria-label="not done">
                    <ErrorOutline />
                  </IconButton>
                )}
          </TableCell>
      </TableRow>



      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1, width: '100%', }}>

              
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom component="div">
                    Деталі заявки:
                  </Typography>
                  <TableDetailTicket ticket={ticket}/>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom component="div">
                  Реєстрація:
                  </Typography>
                  {ticket.status ? <TablePreviewRegistration /> : "Реєстрацій ще немає"}
                 
                </Grid>
              </Grid>
          
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default function TableTickets({regionId}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [connectionTickets, setConnectionTickets] = useState([]);

  // фіксуємо дату та фільтруємо список
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate)
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };
  
  // фільтрація у таблиці по селам
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityFilterChange = (event) => {
    setSelectedCity(event.target.value); // Збережіть вибраний населений пункт для фільтрації
  };


  useEffect(() => {
    API.getConnectionTicketsByRegion(regionId)
      .then(response => setConnectionTickets(response.data))
      .catch(error => console.error('Помилка завантаження списку заявок:', error));
  }, [regionId]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Тип</TableCell>
              <TableCell align="right">
                <Input
                  placeholder='Населений пункт'
                  label="Фільтр по населеному пункту"
                  value={selectedCity}
                  onChange={handleCityFilterChange}
                />
              </TableCell>
              <TableCell align="right">Адреса</TableCell>
              <TableCell align="right">Телефон</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="calendar">
                    <CalendarPicker handleDateChange={handleDateChange} />
                  </IconButton>
                  Дата
              </TableCell>
              <TableCell align="right">Статус</TableCell>
            </TableRow>
            {/* Додайте фільтр для населеного пункту */}
            
          </TableHead>
          
          <TableBody>
          {connectionTickets
            .filter(ticket => (!selectedCity || ticket.city.name.toLowerCase().includes(selectedCity.toLowerCase())) &&
                            (!selectedDate || ticket.created === selectedDate.toDateString()))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((ticket) => (
              <Row key={ticket.id} ticket={ticket} />
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>


      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={connectionTickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}




