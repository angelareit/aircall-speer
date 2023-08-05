import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    currentTab: "Inbox",
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
        console.log(response.data, 'sUPDATEEEE', state.calls);
      })
      .catch((error) => {
        console.log('SAD2');
      });
  }

  const unArchiveAll = function() {
    axios.patch('https://cerulean-marlin-wig.cyclic.app/reset')
      .then((response) => {
        getUpdatedCalls();
      })
      .catch((error) => {
        console.log('SAD3');
      });
  }


  useEffect(() => {
    console.log('Updated state:', state);
  }, [state]);


  return { state, setCurrentTab, getUpdatedCalls, unArchiveAll };
}
