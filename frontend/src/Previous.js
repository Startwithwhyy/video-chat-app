import React from 'react';
import './Previous.css';

const meetingsData = [
  {
    title: 'CodeCrafters Huddle: Sprint Planning',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  },
  {
    title: 'JS Maestros Assembly: Framework Exploration',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  },
  {
    title: 'DevOps Dynasty Sync: Weekly Standup',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  },
  {
    title: 'Talk Tuesday: Latest Trends & Tools',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  },
  {
    title: 'Node.js Nomads Network: Middleware Workshop',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  },
  {
    title: 'React Rebels Roundtable: State Management',
    details: 'March 15, 2024 - 08:00 AM - 10:00 AM',
    participants: '+9'
  }
];

function Previous() {
  return (
    <div className="previous-page-container">
      <h2>Previous Meetings</h2>
      <div className="previous-grid-container">
        {meetingsData.map((meeting, index) => (
          <div className="previous-grid-item" key={index}>
            <div className="event-title">{meeting.title}</div>
            <div className="event-details">{meeting.details}</div>
            <div className="event-participants">{meeting.participants}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Previous;
