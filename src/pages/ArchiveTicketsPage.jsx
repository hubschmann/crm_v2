import React, { useState, useEffect } from 'react'
import TableTickets from '../components/organisms/tickets/TableTickets'
import MenuItemsTickets from '../components/organisms/navigation/MenuItemsTickets'
import { Box, Chip, Container, Divider, Typography } from '@mui/material'


// API
import API from '../database/api'

export default function ArchiveTicketsPage() {

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [regions, setRegions] = useState([])

  useEffect(() => {
    API.getRegions()
      .then((response) => setRegions(response.data))
      .catch((error) => console.error('Error fetching regions:', error));
  }, []);

  const handleClick = (regionId) => {
    console.info('Clicked region:', regionId);
    setSelectedRegion(regionId);
  };

  return (
    <>
      
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: '50px'}}>
        <Typography variant='h4'>Архів заявок</Typography>
        <Divider textAlign="left" sx={{ marginTop: '10px', marginBottom: '10px' }}>Групи</Divider>  
            <Box>
              {regions.map((region) => (
                <Chip 
                    key={region.id}
                    label={region.name} 
                    variant="outlined" 
                    onClick={() => handleClick(region.id)}
                    sx={{ margin: '5px' }} 
                    color="primary"
                />
                  
              ))}
            </Box>
            <Divider sx={{ marginY:'10px' }}/> 
       
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <TableTickets regionId={selectedRegion} />
            </Box>
            
        </Box>
    </>
  )
}
