import { Button, HStack, Td, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { RiDeleteBin7Fill, RiEdit2Fill } from 'react-icons/ri';
import { TimerContext } from '../../context/AppStore';
import EditModel from './EditModel';
const TableRow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    taskArray,
    setTaskArray,
    setTitle,
    setDescription,
  } = useContext(TimerContext);

  const [isEditItem, setIsEditItem] = useState('');

  // Delete task Handler
  const deleteButtonHandler = id => {
    console.log('hlo');
    setTaskArray(prev => prev.filter(item => item.id !== id));
    localStorage.setItem('allTasks', JSON.stringify(taskArray));
  };

  // Edit Task Submit Handler
  const editSubmitHandler = (e, title, description) => {
    e.preventDefault();

    setTaskArray(
      taskArray.map(item => {
        if (item.id === isEditItem) {
          return { ...item, title, description };
        }
        return item;
      })
    );
    setTitle('');
    setDescription('');
    onClose();
  };

  // Open Edit Model
  const editOpenHandler = id => {
    const task = taskArray.find(item => item.id === id);
    setTitle(task.title);
    setDescription(task.description);
    setIsEditItem(id);

    onOpen();
  };

  return (
    <>
      {taskArray &&
        taskArray?.map(item => {
          const { hours, seconds, minutes, title, id } = item;

          return (
            <>
              <Tr fontSize={'15px'} key={id}>
                <Td>{title}</Td>
                <Td>
                  {hours < 10 ? '0' + hours : hours} :{' '}
                  {minutes < 10 ? '0' + minutes : minutes} :{' '}
                  {seconds < 10 ? '0' + seconds : seconds}
                </Td>
                <Td isNumeric>
                  <HStack justifyContent={'flex-end'}>
                    <Button
                      size={'md'}
                      variant={'outline'}
                      color="purple.500"
                      onClick={() => editOpenHandler(id)}
                    >
                      <RiEdit2Fill />
                    </Button>
                    <Button
                      size={'md'}
                      color={'red.600'}
                      onClick={() => deleteButtonHandler(id)}
                    >
                      <RiDeleteBin7Fill />
                    </Button>
                      <EditModel
                        isOpen={isOpen}
                        onOpen={onOpen}
                        editSubmitHandler={editSubmitHandler}
                        id={id}
                        onClose={onClose}
                      />
                  </HStack>
                </Td>
              </Tr>
            </>
          );
        })}
    </>
  );
};

export default TableRow;
