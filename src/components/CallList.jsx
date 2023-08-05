import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import CallTile from './CallTile/index.jsx';
import { organizeCallsByDateNotArchived } from '../helpers/selectors.js';
import useVisualMode from '../hooks/useVisualMode.js';

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
          onArchiveCall={props.onArchiveCall}
          onUpdateCalls={onUpdateCalls}
        />
      );
    }
  });

  const LOADING = "LOADING";
  const DISPLAY = "DISPLAY";
  const { mode, transition } = useVisualMode(DISPLAY);

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
            onArchiveCall={props.onArchiveCall}
            onToggleActive={() => setActiveCallId((prevId) => (prevId === call.id ? null : call.id))}
          />
        )
      ))}
    </div>
  ));

  const handleArchiveAll = () => {
    transition(LOADING);
    props.onArchiveAll()
      .then(() => { transition(DISPLAY) })
      .catch(() => { transition(DISPLAY) });
  }
  const handleUnarchiveAll = () => {
    transition(LOADING);
    props.onUnarchiveAll()
      .then(() => { transition(DISPLAY) })
      .catch(() => { transition(DISPLAY) });
  }

  return (
    <>
      {props.currentTab == 'inbox' &&
        <div className="call-list">
          <div className={'archive-btn'} onClick={handleArchiveAll}>
            <FontAwesomeIcon icon={faBoxArchive} />
            <h2> Archive All</h2>
          </div>
          {mode === DISPLAY && sectionedCalls}
          {mode === LOADING && <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />}

        </div>
      }
      {props.currentTab == 'allCalls' &&
        <div className="call-list">
          <h1>{props.currentTab}</h1>
          <button onClick={handleUnarchiveAll}> RESET</button>
          {mode === LOADING && <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />}
          {mode === DISPLAY && allCalls}
        </div >
      }

    </>

  );
};

export default CallList;
