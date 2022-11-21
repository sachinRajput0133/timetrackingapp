import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const TimerContext = createContext();

export const TimerHolder = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('allTasks')) || [];
  const [taskArray, setTaskArray] = useState(initialState);
  const [taskDetail, setTaskDetail] = useState({});
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(taskArray));
  }, [taskArray]);

  return (
    <TimerContext.Provider
      value={{
        time,
        setTime,
        toggleTimer,
        setToggleTimer,
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        title,
        setTitle,
        description,
        setDescription,
        taskArray,
        setTaskArray,
        taskDetail,
        setTaskDetail,
        
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext };
