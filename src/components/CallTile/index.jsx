import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AnsweredCall from './AnsweredCall.jsx';
import MissedCall from './MissedCall.jsx';
import VoicemailCall from './VoicemailCall.jsx';
import CallFailed from './CallFailed.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CallTile = (props) => {
  const { id, created_at, direction, from, to, via, duration, is_archived, call_type } = props.call;
  const { isActive, onToggleActive } = props;

  const DEFAULT = "DEFAULT";
  const ARCHIVE = "ARCHIVE";
  const { mode, transition } = useVisualMode(DEFAULT);

  // Function to handle archiving the call
  const handleArchive = () => {
    // Implement the logic to archive the call here
    // You can use the call id and an API call to mark the call as archived in your data source
    console.log("Archiving call with id:", id);
    if (!is_archived) {
      props.onArchiveCall(id).then((success) => {
        console.log('archive success');
        transition(ARCHIVE);
      }).catch((error) => {
        console.log('SAD ARCHIVE', error);
        transition(DEFAULT);
      });
    } else {
      props.onUnarchiveCall(id).then((success) => {
        console.log('unarchive success');
        transition(ARCHIVE);
      }).catch((error) => {
        console.log('SAD UNARCHIVE', error);
        transition(DEFAULT);
      });
    }

  };

  const handleToggleActive = () => {
    // Toggle active state of the tile when clicked
    console.log('ACTIVE');
    onToggleActive();
  };

  return (
    <article className='call-container'>
      <div className={`call-tile ${isActive ? 'active' : ''} ${is_archived && props.viewArchivedState && 'archived-state'}`} onClick={handleToggleActive}>
        {call_type === "missed" && <MissedCall call={props.call} />}
        {call_type === "answered" && <AnsweredCall call={props.call} />}
        {call_type === "voicemail" && <VoicemailCall call={props.call} />}
        {!call_type && <CallFailed call={props.call} />}
      </div>

      {isActive && mode === DEFAULT &&
        <div className={'archive-bttn'} onClick={handleArchive}><FontAwesomeIcon icon={faBoxArchive} size='xl' /></div>
      }
    </article>

  );
};

export default CallTile;
