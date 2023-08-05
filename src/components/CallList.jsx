import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
import CallTile from './CallTile/index.jsx';
import { organizeCallsByDateNotArchived } from '../helpers/selectors.js';

const CallList = (props) => {
  const { calls, onUpdateCalls } = props;
  const [activeCallId, setActiveCallId] = useState(null);

  const allCalls = calls.map((call) => {
    if (call.call_type && !call.is_archived) {
      return (
        <CallTile
          key={call.id}
          call={call}
          isActive={call.id === activeCallId}
          onUpdateCalls={onUpdateCalls}
        />
      );
    }
  });

  const organizedCallsByDate = organizeCallsByDateNotArchived(calls);

  const sectionedCalls = Object.entries(organizedCallsByDate).map(([date, callsForDate]) => (
    <div key={date} className='day-section'>
      <div className='date-header'>
        <h2>------{date}------</h2>
      </div>
      {callsForDate.map((call) => (
        call.call_type && (
          <CallTile
            key={call.id}
            call={call}
            isActive={call.id === activeCallId}
            onUpdateCalls={onUpdateCalls}
            onToggleActive={() => setActiveCallId((prevId) => (prevId === call.id ? null : call.id))}
          />
        )
      ))}
    </div>
  ));

  return (
    <div className="call-list">
      <button onClick={props.onUnarchiveAll}> RESET</button>
      {sectionedCalls}
    </div>
  );
};

export default CallList;
