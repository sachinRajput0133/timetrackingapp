import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { TimerContext } from '../../context/AppStore';
import SaveModel from './SaveModel';
import './TimerPage.css';
import { useTime } from '../../customHooks.jsx/TimeHook';
import { v4 as uuidv4 } from 'uuid';
const TimerPage = () => {
  const {
    toggleTimer,
    setToggleTimer,
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    setHours,
    hours,
    taskArray,
    setTaskArray,
    title,
    setTitle,
    description,
    setDescription,
  } = useContext(TimerContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // open save handler
  const saveOpenHandler = () => {
    onOpen();
  };

  //Submit task handler
  const taskSubmitHandler = e => {
    e.preventDefault();

    setTaskArray([
      ...taskArray,
      { title, description, seconds, minutes, hours, id: uuidv4() },
    ]);

    setTitle('');
    setDescription('');
    onClose();
  };

  // Useeffect
  useEffect(() => {
    let interval;
    if (toggleTimer) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);

        if (seconds === 59) {
          setMinutes(prev => prev + 1);
          setSeconds(0);
        }
        if (minutes === 59) {
          setHours(prev => prev + 1);
          setMinutes(0);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [toggleTimer, seconds, setHours, setMinutes, setSeconds, minutes]);

  return (
    <div className="timer-container">
      <Stack
        // border={'1px solid red'}
        gap={'5px'}
        width={["75vw",'77vw', '200px']}
        boxSizing="border-box"
      >
        <Box display={'flex'} justifyContent="center" alignItems="center">
          <Text
            fontWeight={'bold'}
            fontSize={'20'}
            opacity=".8"
            fontFamily={'sans-serif'}
          >
            {useTime()}
          </Text>
        </Box>

        <HStack alignItems={'center'} gap={['5', '2']} justifyContent="center">
          <Button
            isDisabled={toggleTimer ? true : false}
            size={['md', 'sm']}
            onClick={() => setToggleTimer(true)}
          >
            Start
          </Button>
          <Button
            isDisabled={!toggleTimer ? true : false}
            size={['md', 'sm']}
            onClick={() => setToggleTimer(!toggleTimer)}
          >
            Pause
          </Button>
          <Button size={['md', 'sm']} onClick={saveOpenHandler}>
            save
          </Button>
        </HStack>
      </Stack>
      <SaveModel
        isOpen={isOpen}
        onOpen={onOpen}
        taskSubmitHandler={taskSubmitHandler}
        onClose={onClose}
      />
    </div>
  );
};

export default TimerPage;
