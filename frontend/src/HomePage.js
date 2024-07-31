import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Grid } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupIcon from '@mui/icons-material/Group';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import './HomePage.css';
import homeImage from './home.png'; // Replace with your actual home image URL
import Layout from './Layout'; // Import Layout component

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const startMeeting = () => {
    navigate('/video');
  };

  const joinMeeting = () => {
    navigate('/join-meeting');
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
    <Layout>
      <div className="home-container">
        <div className="image-container">
          <img src={homeImage} alt="Home" className="home-image" />
          <div className="datetime">
            <Typography variant="h4">{formatTime(currentTime)}</Typography>
            <Typography variant="subtitle1">{formatDate(currentTime)}</Typography>
          </div>
        </div>
        <Grid container spacing={2} className="action-buttons" justifyContent="center">
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
              color="error"
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
      <Typography variant="h6" gutterBottom>Meeting History</Typography>
      <Card style={{ backgroundColor: '#777', padding: '16px', marginBottom: '20px', borderRadius: '8px', color: '#fff' }}>
        <CardContent>
          <Typography variant="body2">Meeting with Team A - 10:00 AM</Typography>
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#666', padding: '16px', marginBottom: '20px', borderRadius: '8px', color: '#fff' }}>
        <CardContent>
          <Typography variant="body2">Project Discussion - 2:00 PM</Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    </Layout>
  );
};

export default HomePage;
