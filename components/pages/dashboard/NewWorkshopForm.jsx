import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function NewWorkshopForm({ isOpen, onClose }) {
  const initialFocusRef = useRef(null)

  const {
    handleSubmit,
    register: formRegister,
    formState: { errors, isSubmitting },
  } = useForm()

  async function submitHandler({ name }) {
    await fetch('/api/workshops', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    })
    onClose()
  }

  return (
    <Modal
      size='lg'
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
    >
      <ModalOverlay />
      <ModalContent
        bgColor='#08070B'
        as='form'
        noValidate
        onSubmit={handleSubmit((data) => submitHandler(data))}
      >
        <ModalHeader>create new workshop</ModalHeader>
        <ModalCloseButton _focus={{}} _focusWithin={{}} />
        <ModalBody>
          <FormControl isInvalid={errors?.name?.message}>
            <Input
              autoComplete='off'
              _focus={{
                borderColor: 'brand.300',
                _light: {
                  borderColor: 'brand.500',
                },
              }}
              size='lg'
              variant='filled'
              ref={initialFocusRef}
              placeholder='enter workshop name'
              {...formRegister('name', {
                required: {
                  value: true,
                  message: 'a name is required',
                },
                minLength: {
                  value: 5,
                  message: 'name must be at least 5 characters long',
                },
              })}
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter experimental_spaceX='2'>
          <Button type='submit' isDisabled={isSubmitting}>
            save
          </Button>
          <Button onClick={onClose} variant='outline'>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
