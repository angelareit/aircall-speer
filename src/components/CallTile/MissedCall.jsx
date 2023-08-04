import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';


const MissedCall = (props) => {
  const { call } = props;
  const timestamp = new Date(call.created_at);

  const formattedTimestamp = timestamp.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className='missed'>
      <div className='missed-icon'>
        <FontAwesomeIcon icon={faPhoneSlash} size="lg" />
      </div>
      <div className="call-details">
        <p> {call.from}</p>
        <p> {call.via}</p>
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> { }</p>
      </div>
    </div>
  );
};

export default MissedCall;