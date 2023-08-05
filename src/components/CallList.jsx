import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBoxArchive, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import CallTile from './CallTile/index.jsx';
import { organizeCallsByDateNoArchived, organizeCallsByDateWithArchived } from '../helpers/selectors.js';
import useVisualMode from '../hooks/useVisualMode.js';

const CallList = (props) => {
  const { calls, onUpdateCalls } = props;
  const [activeCallId, setActiveCallId] = useState(null);
  const [showArchived, setShowArchived] = useState(true);


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

  const organizedCallsByDateWithArchived = organizeCallsByDateWithArchived(calls);

  const withArchivedSectionedCalls = Object.entries(organizedCallsByDateWithArchived).map(([date, callsForDate]) => (
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
            viewArchivedState={showArchived}
            onUnarchiveCall={props.onUnarchiveCall}
            onArchiveCall={props.onArchiveCall}
            onToggleActive={() => setActiveCallId((prevId) => (prevId === call.id ? null : call.id))}
          />
        )
      ))}
    </div>
  ));


  const organizedCallsByDateNoArchived = organizeCallsByDateNoArchived(calls);

  const noArchivedSectionedCalls = Object.entries(organizedCallsByDateNoArchived).map(([date, callsForDate]) => {
    if (callsForDate.length > 0) {
      return (
        <div key={date} className='day-section'>
          <div className='date-header'>
            <h2>------{date}------</h2>
          </div>
          {callsForDate.map((call) => {
            if (call.call_type) {
              return (
                <CallTile
                  key={call.id}
                  call={call}
                  isActive={call.id === activeCallId}
                  onUpdateCalls={onUpdateCalls}
                  viewArchivedState={showArchived}
                  onArchiveCall={props.onArchiveCall}
                  onUnarchiveCall={props.onUnarchiveCall}
                  onToggleActive={() => setActiveCallId((prevId) => (prevId === call.id ? null : call.id))}
                />
              );
            }
            return null; // Skip rendering if !call.call_type
          })}
        </div>
      );
    }
    return null; // Skip rendering the entire section if callsForDateMap is empty
  });


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

  const handleShowArchive = () => {
    transition(LOADING);
    setShowArchived(!showArchived);
    transition(DISPLAY);
  }

  return (
    <>
      {props.currentTab == 'inbox' &&
        <div className="call-list">
          <div className={'archive-btn'} onClick={handleArchiveAll}>
            <FontAwesomeIcon icon={faBoxArchive} size="xl" />
            <h2> Archive All</h2>
          </div>
          {mode === DISPLAY && noArchivedSectionedCalls}
          {mode === LOADING && <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />}
        </div>
      }
      {props.currentTab == 'allCalls' &&
        <div className="call-list">
          <button onClick={handleUnarchiveAll}>Unarchive All Calls</button>
          <button onClick={handleShowArchive}>
            {showArchived ? <>
              <FontAwesomeIcon icon={faEyeSlash} />Hide All Archived</> :
              <><FontAwesomeIcon icon={faEye} />Include Archived</>}
          </button>

          {mode === LOADING && <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />}
          {mode === DISPLAY && showArchived && withArchivedSectionedCalls}
          {mode === DISPLAY && !showArchived && noArchivedSectionedCalls}

        </div >
      }

    </>

  );
};

export default CallList;
