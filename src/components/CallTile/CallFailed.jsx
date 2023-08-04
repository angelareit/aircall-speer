import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


const CallFailed = (props) => {
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
        <FontAwesomeIcon icon={faCircleExclamation} />
      </div>
      <div className="call-details">
        <p> {call.call_type}</p>
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> { }</p>
      </div>
    </div>
  );
};

export default CallFailed;