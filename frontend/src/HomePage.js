import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupIcon from '@mui/icons-material/Group';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import './HomePage.css';
import logo from './logo.png';
import homeImage from './home.png'; // Replace with your actual home image URL

const HomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const startMeeting = () => {
    handleNavigation('/video');
  };

  const joinMeeting = () => {
    handleNavigation('/join-meeting');
  };

  const scheduleMeeting = () => {
    console.log('Scheduling a meeting...');
  };

  const viewRecordings = () => {
    console.log('Viewing recordings...');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="home-container">
      <Drawer
        variant="permanent"
        style={{ backgroundColor: '#333', color: '#fff' }}
        classes={{ paper: isDrawerOpen ? 'drawer open' : 'drawer closed' }}
      >
        <div className="logo-container">
          <IconButton onClick={toggleDrawer} className="menu-button">
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
          {isDrawerOpen && (
            <>
              <h1 className="sidebar-title">MeetUp</h1>
            </>
          )}
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
        <div className="main-content">
          <div className="image-container">
            <img src={homeImage} alt="Home" className="home-image animated" />
            <div className="datetime">
              <Typography variant="h4">{formatTime(currentTime)}</Typography>
              <Typography variant="subtitle1">{formatDate(currentTime)}</Typography>
            </div>
          </div>
          <Grid container spacing={2} className="action-buttons" justifyContent="space-between">
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                color="primary" 
                className="action-button" 
                onClick={startMeeting}
                fullWidth
              >
                <AddCircleIcon className="action-button-icon" />
                New Meeting
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                color="secondary" 
                className="action-button" 
                onClick={joinMeeting}
                fullWidth
              >
                <GroupIcon className="action-button-icon" />
                Join Meeting
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                color="success" 
                className="action-button" 
                onClick={scheduleMeeting}
                fullWidth
              >
                <ScheduleIcon className="action-button-icon" />
                Schedule Meeting
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                color="warning" 
                className="action-button" 
                onClick={viewRecordings}
                fullWidth
              >
                <VideocamIcon className="action-button-icon" />
                View Recordings
              </Button>
            </Grid>
          </Grid>
          <div className="meeting-history">
            <Typography variant="h6">Today's Upcoming Meetings</Typography>
            <Card className="meeting-card" style={{ backgroundColor: '#333', color: '#fff' }}>
              <CardContent>
                <Typography variant="body2" style={{ fontWeight: 'bold' }}>Staff meeting</Typography>
                <Typography variant="caption">Date: 2024-07-01</Typography>
              </CardContent>
            </Card>
            <Card className="meeting-card" style={{ backgroundColor: '#333', color: '#fff' }}>
              <CardContent>
                <Typography variant="body2" style={{ fontWeight: 'bold' }}>Project Update</Typography>
                <Typography variant="caption">Date: 2024-07-03</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
