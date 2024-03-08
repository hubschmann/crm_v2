
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Box, Divider, Drawer, Toolbar, Typography } from '@mui/material';

// molecules
import Search from '../../molecules/Search';
import Account from '../../molecules/Account';

// menuItems
import MenuItemsTickets from './MenuItemsTickets'

// API
import API from '../../../database/api';

// icons
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LogoWhite from './../../../assets/img/logo.svg'

const drawerWidth = 240;
const menuItemColor = 'white'
const sidebarColor = '#2196f3'
const marginIconMenuItem = '15px'

const Navigation = ({ children }) => {
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const navigate = useNavigate();


    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

  const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
  };

  const handleDrawerToggle = () => {
      if (!isClosing) {
          setMobileOpen(!mobileOpen);
      }
  };

  const drawer = (
    <div>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: sidebarColor }}>
            <img src={LogoWhite} alt="logo" width={30}/>
            <Typography variant="h6" noWrap component="div" color='white' mx={1}>
            UNETCO
            </Typography>
        </Toolbar>
        <Divider />
        <List >
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => {navigate("/")}}>
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
            <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Головна" sx={{ color: menuItemColor }} />
    </ListItemButton>
</ListItem>
        </List>
  
        <Divider sx={{ 
                    fontSize: '12px'
                }}>Заявки
        </Divider>
  
        {/* підключаю список пунктів меню повʼязаниїз заявками */}
        <MenuItemsTickets />
  
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleDrawerClose}> {/* Додано обробник події для закриття меню */}
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  

  return (
      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
              position="fixed"
              sx={{
                  backgroundColor: sidebarColor,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
              }}
          >
              <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                      <MenuIcon />
                  </IconButton>

                  <Search placeholder="Пошук..." />
                  <Account />
              </Toolbar>
          </AppBar>
          <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
          >
              <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onTransitionEnd={handleDrawerTransitionEnd}
                  onClose={handleDrawerClose}
                  ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: sidebarColor },
                  }}
              >
                  {drawer}
              </Drawer>
              <Drawer
                  variant="permanent"
                  sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: sidebarColor },
                  }}
                  open
              >
                  {drawer}
              </Drawer>
          </Box>
          <Box
              component="main"
              sx={{
                  flexGrow: 1, p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  paddingTop: '100px',
              }}
          >
              {/* МІСЦЕ ДЕ РЕНДЕРИТЬСЯ КОНТЕНТ */}
              {children}
          </Box>
      </Box>
  );
}


export default Navigation;
