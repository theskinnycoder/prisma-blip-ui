import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { useCustomToast, useMagicLink } from '@/hooks'
import ThemedButton from '../micros/ThemedButton'

export default function MagicEmailForm() {
  const {
    handleSubmit,
    register: formRegister,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const { error, sendMagicLink } = useMagicLink()
  const toast = useCustomToast()

  async function submitHandler({ handle, email }) {
    await sendMagicLink({ handle, email })
    if (!error) {
      toast({
        title: 'magic link sent...😍',
        description: 'check your email to login with the link',
        status: 'success',
      })
    } else {
      setError('email', 'manual', error)
      toast({
        title: 'link sending failed...😞',
        description: error,
        status: 'error',
      })
    }
  }

  return (
    <Flex
      noValidate
      as='form'
      direction='column'
      onSubmit={handleSubmit((data) => submitHandler(data))}
      p='4'
      justify='center'
      align='center'
      experimental_spaceY='7'
    >
      {/* Handle */}
      <FormControl isInvalid={errors?.handle?.message}>
        <Input
          w='lg'
          type='text'
          name='handle'
          placeholder='enter your display name'
          variant='filled'
          autoComplete='off'
          _focus={{
            borderColor: 'brand.300',
          }}
          {...formRegister('handle', {
            required: {
              value: true,
              message: 'a display name is required',
            },
            minLength: {
              value: 5,
              message: 'display name must be at least 5 characters long',
            },
          })}
        />
        <FormErrorMessage>{errors?.handle?.message}</FormErrorMessage>
      </FormControl>

      {/* Email */}
      <FormControl isInvalid={errors?.email?.message}>
        <Input
          w='lg'
          type='email'
          name='email'
          placeholder='enter your email address'
          variant='filled'
          autoComplete='off'
          _focus={{
            borderColor: 'brand.500',
          }}
          {...formRegister('email', {
            required: {
              value: true,
              message: 'an email is required',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Submit Button */}
      <ThemedButton
        type='submit'
        py='6'
        isLoading={isSubmitting}
        variant='solid'
      >
        send magic link
      </ThemedButton>
    </Flex>
  )
}
