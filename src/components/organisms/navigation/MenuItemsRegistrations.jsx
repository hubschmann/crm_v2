import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu, MenuItem } from '@mui/material';

// API
import API from '../../../database/api';

const menuItemColor = 'white'
const marginIconMenuItem = '15px'

export default function MenuItemsRegistrations() {

    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        API.getRegions().then(response => setRegions(response.data));
    }, []);
    
    // відповідає за відкриття підменю по натисканню на Створити заявку
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenSubMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseSubMenu = () => {
        setAnchorEl(null);
    };
    //   -------------

    // Оголошення стану для відкриття меню архіву регіонів
    const [archiveRegionsMenuAnchorEl, setArchiveRegionsMenuAnchorEl] = useState(null);

    // Обробники відкриття та закриття меню архіву регіонів
    const handleOpenArchiveRegionsMenu = (event) => {
        setArchiveRegionsMenuAnchorEl(event.currentTarget);
    };

    const handleCloseArchiveRegionsMenu = () => {
        setArchiveRegionsMenuAnchorEl(null);
    };
     //   -------------


  return (
    <List>
        <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
                onClick={handleOpenSubMenu}
                sx={{
                    minHeight: 48,
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        marginRight: marginIconMenuItem
                    }}
                >
                    <AddCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Додати" sx={{ color: menuItemColor }} />
            </ListItemButton>
        </ListItem>
        <Menu
            anchorEl={anchorEl}
            onClose={handleCloseSubMenu}
            open={Boolean(anchorEl)}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
           
        >
            <MenuItem onClick={handleCloseSubMenu}>Підключення</MenuItem>
            <MenuItem onClick={handleCloseSubMenu}>Ремонт</MenuItem>
            <MenuItem onClick={handleCloseSubMenu}>Загальне</MenuItem>
        </Menu>

        

        <ListItem 
            disablePadding sx={{ display: "block" }} 
            onClick={handleOpenArchiveRegionsMenu}
        >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        marginRight: marginIconMenuItem
                    }}
                >
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText 
                    primary="Архів" 
                    sx={{ color: menuItemColor }}  
                    onClick={() => {navigate("/archive-registrations")} }
                />
            </ListItemButton>
        </ListItem>
        

    </List>
  )
}
