import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import useApplicationData from './hooks/useApplicationData.js';
import CallTile from './components/CallTile/index.jsx';

const App = () => {
  const { state, setCurrentTab } = useApplicationData();

  if (state.calls.length === 0) {
    return <div>Loading...</div>;
  }

  const allCalls = state.calls.map((call) => {
    return <CallTile key={call.id} call={call} />;
  });

  return (
    <div className='container'>
    <Header onChangeTab={setCurrentTab}/>
    <div className="call-list">{state.currentTab =='allCalls' && allCalls}</div>
    </div>
  );
};

const root = document.getElementById('app');
createRoot(root).render(<App />);
export default App;
