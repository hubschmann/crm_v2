import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Chip, Divider, Typography } from '@mui/material'

// API
import API from '../../database/api';

export default function RegionList({regions}  ) {

    const [selectedRegion, setSelectedRegion] = useState(null);
  
    
  
    const handleClick = (regionId) => {
      console.info('Clicked region:', regionId);
      setSelectedRegion(regionId);
    };


  return (
    <>
        <Divider textAlign="left" sx={{ marginTop: '20px', marginBottom: '10px' }}>Групи</Divider>  
        <Box>
              {regions.map((region) => (
                <Chip 
                    key={region.id}
                    label={region.name} 
                    variant="outlined" 
                    onClick={() => handleClick(region.id)}
                    sx={{ marginX: '5px' }} 
                />
                  
              ))}
            </Box>
          <Divider sx={{ marginY:'20px' }}/>  
    </>
  )
}
