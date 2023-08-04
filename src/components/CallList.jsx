import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
import CallTile from './CallTile/index.jsx';
import { organizeCallsByDate } from '../helpers/selectors.js';

const CallList = (props) => {
  const { calls } = props;

  const allCalls = calls.map((call) => {
    if (call.call_type) {
      return <CallTile key={call.id} call={call} />;
    }
  });

  const organizedCallsByDate = organizeCallsByDate(calls);

  const sectionedCalls = Object.entries(organizedCallsByDate).map(([date, callsForDate]) => (
    <div key={date} className='day-section'>
      <h2>{date}</h2>
      {callsForDate.map((call) => (
        call.call_type && <CallTile key={call.id} call={call} />
      ))}
    </div>
  ));


  return (
    <div className="call-list">
      {sectionedCalls}
    </div>

  );
};

export default CallList;