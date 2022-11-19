import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import TableRow from './TableRow';

const TaskList = () => {




  return (
    <Box  boxShadow={'-2px 0 10px rgba(107, 70 ,193 ,0.26)'}  borderRadius={"10px"} minW={["100vw","40vw"]}  mt="30px"  p={"10px"} justifyContent={"center"} display="flex"  alignItems={"center"}>
      <TableContainer w={['100vw', 'full']}>
        <Table variant={'simple'} size="md">
          <TableCaption>All Tasks</TableCaption>
          <Thead>
            <Tr>
              <Th>Task List</Th>
              <Th>Time</Th>
              <Th isNumeric >Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* table row */}
            <TableRow/>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskList;
