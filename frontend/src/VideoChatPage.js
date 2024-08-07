

import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhone,
  FaPhoneSlash,
  FaRecordVinyl,
  FaStop,
  FaSmile,
  FaUserPlus,
  FaShareAlt,
} from 'react-icons/fa';
import './VideoChatPage.css';
import Layout from './Layout'; // Import the Layout component

const socket = io.connect('http://localhost:5000');

function VideoChatPage() {
  const [me, setMe] = useState('');
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const [muteAudio, setMuteAudio] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [isRinging, setIsRinging] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [showReactions, setShowReactions] = useState(false);
  const [participants, setParticipants] = useState([]);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    socket.on('me', (id) => {
      setMe(id);
    });

    socket.on('callUser', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });

    socket.on('callAccepted', () => {
      setIsRinging(false);
      setCallAccepted(true);
    });

    socket.on('newParticipant', (participant) => {
      setParticipants((prev) => [...prev, participant]);
    });

    socket.on('removeParticipant', (participantId) => {
      setParticipants((prev) => prev.filter(p => p.id !== participantId));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCopy = () => {
    console.log('Copying ID:', me);
  };

  const callUser = (id) => {
    setIsRinging(true);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on('stream', (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.on('callAccepted', (signal) => {
      setIsRinging(false);
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCallAccepted(false);
    setReceivingCall(false);
    setIsRinging(false);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
    window.location.reload();
  };

  const toggleMuteAudio = () => {
    setMuteAudio((prevMuteAudio) => !prevMuteAudio);
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !muteAudio;
      });
    }
  };

  const toggleCamera = () => {
    setCameraOn((prevCameraOn) => !prevCameraOn);
    if (stream) {
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !cameraOn;
      });
    }
  };

  const startRecording = () => {
    const options = { mimeType: 'video/webm; codecs=vp9' };
    const mediaRecorder = new MediaRecorder(stream, options);
    setMediaRecorder(mediaRecorder);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'recording.webm';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    };

    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const toggleReactions = () => {
    setShowReactions((prev) => !prev);
  };

  const addParticipant = () => {
    // Implementation depends on how you handle participants
    const participantId = prompt("Enter participant ID:");
    if (participantId) {
      socket.emit('addParticipant', participantId);
    }
  };

  const shareScreen = () => {
    navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
    }).catch((error) => {
      console.error('Error sharing screen:', error);
    });
  };

  return (
    <Layout> {/* Wrap content with Layout component */}
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && <video playsInline muted ref={myVideo} autoPlay />}
            <div className="video-buttons">
              <button onClick={toggleMuteAudio}>
                {muteAudio ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </button>
              <button onClick={toggleCamera}>
                {cameraOn ? <FaVideoSlash /> : <FaVideo />}
              </button>
              <button onClick={shareScreen} className="screen-share-button">
                <FaShareAlt />
              </button>
              <button onClick={addParticipant} className="add-participant-button">
                <FaUserPlus />
              </button>
              <button onClick={toggleReactions} className="reaction-button">
                <FaSmile />
              </button>
              {showReactions && (
                <div className="reaction-dropdown">
                  <span className="reaction">😊</span>
                  <span className="reaction">😢</span>
                  <span className="reaction">😂</span>
                  {/* Add more emojis here */}
                </div>
              )}
              <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? <FaStop /> : <FaRecordVinyl />}
              </button>
              <button onClick={callAccepted && !callEnded ? leaveCall : () => callUser(idToCall)}>
                {callAccepted && !callEnded ? <FaPhoneSlash /> : <FaPhone />}
              </button>
            </div>
          </div>
          <div className="video">
            {callAccepted && !callEnded && <video playsInline ref={userVideo} autoPlay />}
          </div>
        </div>
        <div className="call-controls">
          {receivingCall && !callAccepted && (
            <div className="caller-notification">
              <h2>{name} is calling...</h2>
              <div className="answer-decline-buttons">
                <button className="answer-button" onClick={answerCall}>Answer</button>
                <button className="decline-button" onClick={leaveCall}>Decline</button>
              </div>
            </div>
          )}
        </div>
        <div className="controls">
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            placeholder="Enter ID to call"
          />
          <CopyToClipboard text={me}>
            <button className="copy-id-button" onClick={handleCopy}>Copy ID</button>
          </CopyToClipboard>
        </div>
      </div>
    </Layout>
  );
}

export default VideoChatPage;