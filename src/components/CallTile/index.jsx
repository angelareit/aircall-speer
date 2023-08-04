import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Answered from './Answered.jsx';
import Missed from './missed';


const CallTile = (props) => {
  const { id, created_at, direction, from, to, via, duration, is_archived, call_type } = props.call;

  return (
    <article className="call-tile">
      {call_type === "missed" && <Missed call={props.call}/> }
      {call_type === "answered" && <Answered call={props.call}/> }

     {/*  <div className="tile-header">
        <h5>Call Details</h5>
        <p><strong>Call Type:</strong> {call_type}</p>
      </div>
      <div className="card-body">
        <p><strong>Call ID:</strong> {id}</p>
        <p><strong>Created At:</strong> {created_at}</p>
        <p><strong>Direction:</strong> {direction}</p>
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
        <p><strong>Via:</strong> {via}</p>
        <p><strong>Duration:</strong> {duration} seconds</p>
        <p><strong>Is Archived:</strong> {is_archived ? 'Yes' : 'No'}</p>
        <p><strong>Call Type:</strong> {call_type}</p>
      </div> */}
    </article>
  );
};

export default CallTile;
