import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';


const VoicemailCall = (props) => {
  const { call } = props;

  const timestamp = new Date(call.created_at);

  const formattedTimestamp = timestamp.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className='voicemail'>
      <div className='voicemail-icon'>
        <FontAwesomeIcon icon={faVoicemail} size="lg"/>
      </div>
     <div className="call-details">
        <p> {call.call_type}</p>
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> {}</p>
      </div>
    </div>
  );
};

export default VoicemailCall;
