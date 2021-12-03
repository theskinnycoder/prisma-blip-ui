import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ImportDataForm({ isOpen, onClose }) {
  const { query } = useRouter()

  async function submitHandler() {
    await fetch(`/api/workshops/${query?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        attendees: [],
      }),
    })
    onClose()
  }

  return (
    <Modal size='lg' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor='#08070B'
        as='form'
        noValidate
        onSubmit={handleSubmit((data) => submitHandler(data))}
      >
        <ModalHeader>create new workshop</ModalHeader>
        <ModalCloseButton _focus={{}} _focusWithin={{}} />
        <ModalBody></ModalBody>

        <ModalFooter experimental_spaceX='2'>
          <Button type='submit'>import</Button>
          <Button onClick={onClose} variant='outline'>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
