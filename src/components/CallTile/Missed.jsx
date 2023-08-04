import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';


const Missed = (props) => {
  const { call } = props;

  return (
    <div className='missed'>
     <div className="tile-content">
        <h5>Missed Call</h5>
        <FontAwesomeIcon icon={faPhoneSlash} size="lg"/>
        <p> {call.call_type}</p>
      </div>
      <div className="card-body">
        <p><strong>Call ID:</strong> {call.id}</p>
      </div>
    </div>
  );
};

export default Missed;