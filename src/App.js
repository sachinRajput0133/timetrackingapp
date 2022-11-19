import React from 'react';
import TaskList from './components/tasklist/TaskList';
import TimerPage from './components/timerpage/TimerPage';
import './App.css';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <>
      <ColorModeSwitcher />

      <div className="container">
        <TimerPage />
        <TaskList />
      </div>
    </>
  );
}

export default App;
