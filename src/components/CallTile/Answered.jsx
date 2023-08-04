import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Answered = (props) => {
  const { call } = props;

  return (
    <div className="answered">
      <div className="tile-content">
        <h5>Missed Call</h5>
        <FontAwesomeIcon icon="fa-solid fa-phone-slash" size="lg"/>
        <p> {call.call_type}</p>
      </div>
      <div className="card-body">
        <p><strong>Call ID:</strong> {call.id}</p>
      </div>
    </div>
  );
};

export default Answered;
