import React from 'react';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import API from '../database/api';

// components
import RegionCard from '../components/molecules/RegionCard';



export default function HomePage() {

  const [regions, setRegions] = useState([]);

  useEffect(() => {
    API.getRegionTicketsCount().then(response => setRegions(response.data));
  }, []);

  return (
   
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Grid container spacing={2}>
      {regions.map((region) => (
        <Grid item xs={12} sm={6} md={4} key={region.id}> {/* Встановлюємо розміри елементів у відповідності до розміру екрану */}
          <div style={{ marginBottom: '20px' }}>
            <RegionCard
              name={region.name}
              connectionCount={region.connection_tickets_count}
              serviceCount={region.service_tickets_count}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  </Box>
     
  
  )
}
