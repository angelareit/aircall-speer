import React from 'react';
import { createRoot } from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
import Header from './components/Header.jsx';
import useApplicationData from './hooks/useApplicationData.js';
import CallTile from './components/CallTile/index.jsx';

const App = () => {
  const { state, setTab } = useApplicationData();

  if (state.calls.length === 0) {
    return <div>Loading...</div>;
  }

  const allCalls = state.calls.map((call) => {
    return <CallTile call={call} />;
  });

  return (
    <div className='container'>
      <div className="call-list">{allCalls}</div>
    </div>
  );
};

const root = document.getElementById('app');
createRoot(root).render(<App />);
export default App;
