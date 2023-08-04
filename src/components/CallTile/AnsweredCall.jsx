import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const AnsweredCall = (props) => {
  const { call } = props;

  const timestamp = new Date(call.created_at);

  const formattedTimestamp = timestamp.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className='answered'>
      <div className='answered-icon'>
        <FontAwesomeIcon icon={faPhoneVolume} size="lg"/>
      </div>
     <div className="call-details">
        <p> {call.from}</p>
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> {}</p>
      </div>
    </div>
  );
};

export default AnsweredCall;
