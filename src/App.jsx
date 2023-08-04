import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import useApplicationData from './hooks/useApplicationData.js';
import CallList from './components/CallList.jsx';

const App = () => {
  const { state, setCurrentTab } = useApplicationData();

  return (
    <div className='container'>
      <Header onChangeTab={setCurrentTab} />
      {state.currentTab == 'allCalls' && <CallList calls={state.calls} />}
    </div>
  );
};

const root = document.getElementById('app');
createRoot(root).render(<App />);
export default App;
