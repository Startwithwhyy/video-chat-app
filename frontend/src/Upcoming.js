// Upcoming.js
import React from 'react';
import './Upcoming.css';
import Layout from './Layout';

const Upcoming = () => {
  return (
    <Layout>
      <div className="upcoming-container">
        <h2>Upcoming Meetings</h2>
        <div className="event-box-container">
          {/* Example Event Boxes */}
          <div className="event-box">
            <div className="event-title">Team Meeting</div>
            <div className="event-date">August 1, 2024</div>
            <div className="event-description">
              Discuss project progress
            </div>
            <button className="start-button">Start</button>
          </div>
          <div className="event-box">
            <div className="event-title">Client Call</div>
            <div className="event-date">August 3, 2024</div>
            <div className="event-description">
              Review new requirements
            </div>
            <button className="start-button">Start</button>
          </div>
          <div className="event-box">
            <div className="event-title">Training Session</div>
            <div className="event-date">August 5, 2024</div>
            <div className="event-description">
              Team skill enhancement
            </div>
            <button className="start-button">Start</button>
          </div>
          {/* Add more event boxes as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;
