import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import useApplicationData from './hooks/useApplicationData.js';
import CallList from './components/CallList.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const { state, setCurrentTab, getUpdatedCalls, resetAllCalls, unarchiveAllCalls, unArchiveCall, archiveAllCalls, archiveCall } = useApplicationData();

  return (
    <div className='container'>
      <Header onChangeTab={setCurrentTab} handleResetCalls={resetAllCalls} currentTab={state.currentTab} />
      {state.currentTab == 'inbox' && <CallList calls={state.calls} currentTab={state.currentTab} onUnarchiveAll={unarchiveAllCalls} onUnarchiveCall={unArchiveCall} onArchiveAll={archiveAllCalls} onArchiveCall={archiveCall} />}
      {state.currentTab == 'allCalls' && <CallList calls={state.calls} currentTab={state.currentTab} onUnarchiveAll={unarchiveAllCalls} onUnarchiveCall={unArchiveCall} onArchiveAll={archiveAllCalls} onArchiveCall={archiveCall} />}
      <Footer/>
    </div>
  );
};

const root = document.getElementById('app');
createRoot(root).render(<App />);
export default App;
