import { Button } from '@chakra-ui/react'

export default function ThemedButton(props) {
  return (
    <Button
      variant='solid'
      {...props}
      color='white'
      bgColor='brand.500'
      _hover={{
        transform: 'scale(1.05)',
      }}
      _focusWithin={{
        transform: 'scale(0.95)',
      }}
    />
  )
}
