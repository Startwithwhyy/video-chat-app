// Previous.js
import React from 'react';
import './Previous.css';
import Layout from './Layout';

const Previous = () => {
  const meetings = [
    {
      id: 1,
      title: 'Quarterly Review',
      date: 'July 1, 2024',
      duration: '2 hours',
      participants: 'John Doe, Jane Smith, and 3 others',
      notes: 'Discussed quarterly performance and goals.',
    },
    {
      id: 2,
      title: 'Team Meeting',
      date: 'July 5, 2024',
      duration: '1.5 hours',
      participants: 'Alex Johnson, Emily Davis, and 5 others',
      notes: 'Addressed project issues and timelines.',
    },
    {
      id: 3,
      title: 'Workshop',
      date: 'July 10, 2024',
      duration: '3 hours',
      participants: 'Sarah Lee, Michael Brown, and 8 others',
      notes: 'Explored new tech trends and innovations.',
    },
    // Add more meetings as needed
  ];

  return (
    <Layout>
      <div className="previous-container">
        <h2>Previous Meetings</h2>
        <div className="event-box-container">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="event-box">
              <div className="event-header">
                <div className="event-title">{meeting.title}</div>
                <div className="event-date">{meeting.date}</div>
              </div>
              <div className="event-details">
                <p>
                  <strong>Duration:</strong> {meeting.duration}
                </p>
                <p>
                  <strong>Participants:</strong> {meeting.participants}
                </p>
                <p>
                  <strong>Notes:</strong> {meeting.notes}
                </p>
              </div>
              <div className="event-actions">
                <button className="details-button">Export Summary</button>
                <button className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Previous;
