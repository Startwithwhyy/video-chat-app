import React from 'react';
import { Button, Typography, Card, CardContent, IconButton, Box, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from './Layout';

const Personalroom = () => {
  console.log("Personalroom component is rendering"); // Debugging log

  return (
    <Layout>
      <Box sx={{ flex: 1, padding: 4 }}>
        <Typography variant="h5" color="white" sx={{ marginBottom: 2 }}>
          Personal Meeting Room
        </Typography>
        <Card sx={{ backgroundColor: '#36393F', color: 'white', padding: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6">Topic: JS Mastery's Personal Meeting Room</Typography>
            <Typography variant="body2">Meeting ID: 324 531 3821</Typography>
            <Typography variant="body2">
              Passcode: <span style={{ letterSpacing: '0.1em' }}>******</span> <Button variant="text" sx={{ color: '#7289DA' }}>Show</Button>
            </Typography>
            <Typography variant="body2">
              Invite Link: <Link href="#" sx={{ color: '#7289DA' }}>https://us03web.zoom.us/j/345672?pwd=3f2uiui3h4un134f</Link>
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#7289DA', marginRight: 1 }}>Start the meeting</Button>
              <IconButton color="primary" sx={{ color: '#7289DA' }}><ContentCopyIcon /></IconButton>
              <IconButton color="primary" sx={{ color: '#7289DA' }}><EditIcon /></IconButton>
              <IconButton color="primary" sx={{ color: '#7289DA' }}><DeleteIcon /></IconButton>
            </Box>
            
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ marginTop: 2, padding: 1, marginLeft: 4 }}>
  <Button
    variant="contained"
    color="primary"
    sx={{ backgroundColor: '#7289DA' }}
    startIcon={<AddCircleOutlineIcon sx={{ color: 'white' }} />}
  >
    Create New Room
  </Button>
</Box>



    </Layout>
  );
};

export default Personalroom;
