import { useToast } from '@chakra-ui/react'

export default function useCustomToast() {
  const toast = useToast()

  return ({ title, description, status }) =>
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
}
