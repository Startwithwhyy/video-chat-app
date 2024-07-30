// Layout.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
//import './Layout.css'; // Styles specific to the layout

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="layout-container">
      <Drawer
        variant="permanent"
        style={{ backgroundColor: '#333', color: '#fff' }}
        classes={{ paper: isDrawerOpen ? 'drawer open' : 'drawer closed' }}
      >
        <div className="logo-container">
          <IconButton onClick={toggleDrawer} className="menu-button">
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
          {isDrawerOpen && <h1 className="sidebar-title">MeetUp</h1>}
        </div>
        <List>
          <ListItem button onClick={() => handleNavigation('/home')}>
            <ListItemIcon>
              <HomeIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/upcoming')}>
            <ListItemIcon>
              <CalendarTodayIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Upcoming" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/previous')}>
            <ListItemIcon>
              <HistoryIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Previous" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/video')}>
            <ListItemIcon>
              <VideoLibraryIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Recordings" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/personal-room')}>
            <ListItemIcon>
              <MeetingRoomIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Personal Room" />
          </ListItem>
        </List>
      </Drawer>
      <div className={`content ${isDrawerOpen ? 'open' : ''}`}>
        <header className="header">
          <IconButton style={{ marginLeft: 'auto' }} className="profile-icon">
            <AccountCircleIcon style={{ color: '#fff', fontSize: '2rem' }} />
          </IconButton>
        </header>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
