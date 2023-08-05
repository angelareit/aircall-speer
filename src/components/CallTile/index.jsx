import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AnsweredCall from './AnsweredCall.jsx';
import MissedCall from './MissedCall.jsx';
import VoicemailCall from './VoicemailCall.jsx';
import CallFailed from './CallFailed.jsx';
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

    props.onArchiveCall(id).then((success) => {
      console.log('archive success');
      transition(ARCHIVE);
    }).catch((error) => {
      console.log('SAD ARCHIVE', error);
      transition(DEFAULT);
    });


    /*    axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
           is_archived: true
         })
         .then((response) => {
           console.log(response.data);
           transition(ARCHIVE);
           props.onUpdateCalls(); // Trigger update of call list in the parent component
         })
         .catch((error) => {
           console.log('SAD ARCHIVE', error);
           transition(DEFAULT);
         }); */
  };

  const handleToggleActive = () => {
    // Toggle active state of the tile when clicked
    console.log('ACTIVE');
    onToggleActive();
  };

  return (
    <> {!is_archived &&
      <article className={`call-tile ${isActive ? 'active' : ''}`} onClick={handleToggleActive}>
        {/* Render the appropriate call component based on the call_type */}
        {call_type === "missed" && <MissedCall call={props.call} />}
        {call_type === "answered" && <AnsweredCall call={props.call} />}
        {call_type === "voicemail" && <VoicemailCall call={props.call} />}
        {!call_type && <CallFailed call={props.call} />}

        {/* Conditionally render the archive button when active */}
        {isActive && !is_archived && mode === DEFAULT && (
          <div onClick={handleArchive}>Archive all calls</div>
        )}
      </article>
    }
    </>

  );
};

export default CallTile;
