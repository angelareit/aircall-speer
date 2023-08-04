import React from 'react';
import '../../styles/components/Missed.scss'
const Missed = (props) => {
  const { call } = props;

  return (
    <div className='missed'>
      <div className="tile-header">
        <h5>Missed Call</h5>
        <i className="fas fa-home"></i>
      </div>
      <div className="card-body">
        <p><strong>Call ID:</strong> {call.id}</p>
      </div>
    </div>
  );
};

export default Missed;
