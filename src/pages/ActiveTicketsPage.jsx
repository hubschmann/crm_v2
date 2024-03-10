import React, { useState, useEffect } from 'react'

import { Box, Chip, Divider, Typography } from '@mui/material'

import CardTicket from './../components/molecules/CardTicket'

// API
import API from './../database/api'
import CityBarActiveTickets from '../components/molecules/CityBarActiveTickets';

export default function ActiveTicketsPage() {

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
          <Typography variant='h4'>Актуальні заявки</Typography>
          <Divider textAlign="left" sx={{ marginTop: '20px', marginBottom: '10px' }}>Групи</Divider>  
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
                <CityBarActiveTickets />
            </Box>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <CardTicket />
            </Box>
            
        </Box>
    </>
  )
}
