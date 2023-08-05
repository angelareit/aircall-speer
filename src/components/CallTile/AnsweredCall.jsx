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

  function formattedDuration(num) {
    if (num > 60) {
      return (num / 60).toFixed(0) + ' min';
    }
    else {
      return num.toFixed(0) + ' sec';
    }
  };

  return (
    <div className='answered'>
      <div className='answered-icon'>
        <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
      </div>
      <div className="call-details">
        <h3> + {call.from}</h3>
        <p> called <strong>{call.via || call.to}</strong>  for <strong>{formattedDuration(call.duration)}</strong></p>
      </div>
      <div className="timestamp">
        <p><strong>{formattedTimestamp}</strong> { }</p>
      </div>
    </div>
  );
};

export default AnsweredCall;
