import React from 'react';
import './Upcoming.css';
import EventIcon from '@mui/icons-material/Event'; // Icon for grid items
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy'; // Icon for copy invitation

function Upcoming() {
  const handleStartMeeting = (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling to the parent grid item
    console.log('Starting meeting...');
  };

  const handleCopyInvitation = (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling to the parent grid item
    console.log('Copying invitation...');
  };

  return (
    <div className="upcoming-page-container">
      <h2>Upcoming Events</h2>
      <div className="upcoming-events-box">
        <div className="upcoming-grid-container">
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 1</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 2</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 3</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 4</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 5</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
          <div className="upcoming-grid-item">
            <EventIcon style={{ fontSize: '2rem', color: '#fff' }} />
            <div className="event-title">Event 6</div>
            <div className="event-details">March 15, 2024 - 08:00 AM - 10:00 AM</div>
            <div className="event-participants">+9</div>
            <div className="action-buttons">
              <Button
                variant="contained"
                color="primary"
                className="start-button"
                onClick={handleStartMeeting}
              >
                Start
              </Button>
              <Button
                variant="contained"
                className="copy-invitation-button"
                onClick={handleCopyInvitation}
                startIcon={<FileCopyIcon />}
              >
                Copy Invitation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
