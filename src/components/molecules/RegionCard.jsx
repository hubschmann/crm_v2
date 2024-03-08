import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const styles = {
    bottomRegionCard: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    connectionItem: {
        fontSize: 25,
        color: 'green',
    },

    serviceItem: {
        fontSize: 25,
        color: 'red',
    }
}


export default function RegionCard({ name, connectionCount, serviceCount }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={600} component="div">
            {name}
          </Typography>
          <Divider />
          <div style={styles.bottomRegionCard}>
            <div style={styles.connectionItem}>
                <PersonAddIcon fontSize="large"/>
                <span>{connectionCount}</span>
            </div>
            
            <div style={styles.serviceItem}>
                <ManageAccountsIcon fontSize="large"/>
                <span>{serviceCount}</span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}