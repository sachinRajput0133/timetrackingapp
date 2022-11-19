import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Box,
  Input,
  FormLabel,
  HStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { TimerContext } from '../../context/AppStore';

function EditModel({ isOpen, onClose, editSubmitHandler }) {
  const { title, setTitle, description, setDescription } =
    useContext(TimerContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form
              action=""
              onSubmit={e => editSubmitHandler(e, title, description)}
              style={{ width: '100%' }}
            >
              <Box my={'4'}>
                <FormLabel htmlFor="title" children="Title" />

                <Input
                  required
                  id="name"
                  value={title}
                  type="text"
                  onChange={e => setTitle(e.target.value)}
                  placeholder="abc.."
                  focusBorderColor={'green.500'}
                />
              </Box>

              <Box my={'4'}>
                <FormLabel htmlFor="description" children="Description" />

                <Textarea
                  required
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="abc.."
                  focusBorderColor={'green.500'}
                />
              </Box>

              <HStack justifyContent={'space-between'}>
                <Button size={'md'} my={'4'} colorScheme="green" type="submit">
                  Save
                </Button>
                <Button
                  size={'md'}
                  my={'4'}
                  colorScheme="red"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModel;
