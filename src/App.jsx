import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import useApplicationData from './hooks/useApplicationData.js';
import CallList from './components/CallList.jsx';

const App = () => {
  const { state, setCurrentTab , getUpdatedCalls, unArchiveAll, archiveAllCalls, archiveCall} = useApplicationData();

  return (
    <div className='container'>
      <Header onChangeTab={setCurrentTab} />
      {state.currentTab == 'inbox' && <CallList calls={state.calls} currentTab={state.currentTab} onUpdateCalls={getUpdatedCalls} onUnarchiveAll={unArchiveAll}   onArchiveCall={archiveCall}/>}
      {state.currentTab == 'allCalls' && <CallList calls={state.calls} currentTab={state.currentTab} onUpdateCalls={getUpdatedCalls} onArchiveAll={archiveAllCalls}   onArchiveCall={archiveCall}/>}

    </div>
  );
};

const root = document.getElementById('app');
createRoot(root).render(<App />);
export default App;
