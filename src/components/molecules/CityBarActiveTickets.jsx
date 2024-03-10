import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Zoom, Tooltip } from '@mui/material';

// icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CityBarActiveTickets() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
            <Tooltip TransitionComponent={Zoom} title="Перейти до списку заявок по цьому селу">
                <IconButton aria-label="settings">
                    <ReadMoreIcon />
                </IconButton>
            </Tooltip>
          
        }
        title="Новомиколаївка"
      />
      
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                <TableRow >
                    
                    <TableCell align="left" sx={{display:'flex'}}>
                        <PersonAddIcon sx={{color: 'green', marginRight: '5px' }} />
                        <Typography>Підключення</Typography>
                    </TableCell>
                    <TableCell align="right" sx={{fontWeight: 700, fontSize: '18px' }}>1</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" sx={{display:'flex'}}>
                            <ManageAccountsIcon sx={{color: 'red', marginRight: '5px' }} />
                            <Typography>Ремонти</Typography>
                        </TableCell>
                        <TableCell align="right" sx={{fontWeight: 700, fontSize: '18px' }}>4</TableCell>
                    </TableRow>
                
                </TableBody>
            </Table>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip TransitionComponent={Zoom} title="Додати у план робіт">
            <IconButton aria-label="add to task">
              <AddLocationAltIcon />
            </IconButton>
        </Tooltip>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Якась інфа по селу</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
