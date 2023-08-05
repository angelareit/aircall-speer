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
        <h3> + {call.to}</h3>
        {call.via ? <p>  <strong>{call.from}</strong> tried to call using <strong>{call.via}</strong></p>
          : <p> {call.from} tried to call.</p>}
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> { }</p>
      </div>
    </div>
  );
};

export default MissedCall;