import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    currentTab: "inbox",
    calls: [],
  });

  const setCurrentTab = (tab) => setState({ ...state, currentTab: tab });

  useEffect(() => {
    // Make the API call using Axios
    axios.get('https://cerulean-marlin-wig.cyclic.app/activities')
      .then((response) => {
        setState((prev) => ({ ...prev, calls: [...response.data] }));
        console.log(response.data, 'state', state.calls);
      })
      .catch((error) => {
        console.log('SAD');
      });
  }, []);

  const getUpdatedCalls = function() {
    axios.get('https://cerulean-marlin-wig.cyclic.app/activities')
      .then((response) => {
        setState((prev) => ({ ...prev, calls: [...response.data] }));
      })
      .catch((error) => {
        console.log('SAD2');
      });
  }

  const resetAllCalls = function() {
   return axios.patch('https://cerulean-marlin-wig.cyclic.app/reset')
      .then((response) => {
        getUpdatedCalls();
      })
      .catch((error) => {
        console.log('SAD3');
      });
  }

  const unArchiveAllCalls = () => {
    const updatePromises = state.calls.map((call) => {
      if (call.call_type) {
        return axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${call.id}`, {
          is_archived: false
        }).catch(() => { console.log('ERROR HERE', call.id); });
      }
      return Promise.resolve(); // Resolve immediately if the call is already archived
    });

   return Promise.all(updatePromises)
      .then(() => {
        getUpdatedCalls(); // Fetch updated calls after archiving all
      })
      .catch((error) => {
        console.log('Error unArchiving calls:', error);
      });
  };

  function unArchiveCall (id) {
    return axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
       is_archived: false
     })
       .then((response) => {
         console.log(response.data);
         getUpdatedCalls(); // Trigger update of call list in the parent component
   
       })
       .catch((error) => {
         console.log('SAD ARCHIVE', error);
       });
   }

  const archiveAllCalls = () => {
    const updatePromises = state.calls.map((call) => {
      if (call.call_type) {
        return axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${call.id}`, {
          is_archived: true
        }).catch(() => { console.log('ERROR HERE', call.id); });
      }
      return Promise.resolve(); // Resolve immediately if the call is already archived
    });

   return Promise.all(updatePromises)
      .then(() => {
        getUpdatedCalls(); // Fetch updated calls after archiving all
      })
      .catch((error) => {
        console.log('Error archiving calls:', error);
      });
  };

  function archiveCall (id) {
   return axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
      is_archived: true
    })
      .then((response) => {
        console.log(response.data);
        getUpdatedCalls(); // Trigger update of call list in the parent component
  
      })
      .catch((error) => {
        console.log('SAD ARCHIVE', error);
      });
  }



  useEffect(() => {
  //  console.log('Updated state:', state);
  }, [state]);


  return { state, setCurrentTab, getUpdatedCalls,resetAllCalls,unArchiveCall,unarchiveAllCalls: unArchiveAllCalls ,resetAllCalls, archiveAllCalls, archiveCall };
}
