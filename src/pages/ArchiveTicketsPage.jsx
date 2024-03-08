import React from 'react'
import TableTickets from '../components/organisms/tickets/TableTickets'
import { Box } from '@mui/material'

export default function ArchiveTicketsPage() {
  return (
    <>
        <Box sx={{ display: "flex"}}>
       
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <TableTickets />
            </Box>
            
        </Box>
    </>
  )
}
