import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import MagicEmailForm from '@/components/forms/MagicEmailForm'
import SocialLogins from '@/components/forms/SocialLogins'
import { useEffect } from 'react'
import { useUser } from '@/hooks'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { ChevronLeftIcon } from '@/icons'

export default function AuthPage() {
  const { user } = useUser()
  const { push, prefetch } = useRouter()

  useEffect(() => {
    if (user) {
      push('/dashboard')
    }
  }, [push, user])

  useEffect(() => {
    prefetch('/dashboard')
  }, [prefetch])

  return (
    !user && (
      <Flex align='center' justify='center' h='85vh'>
        <Flex
          pr='16'
          direction='column'
          justify='center'
          align='flex-start'
          experimental_spaceY='4'
        >
          {/* Go back to home */}
          <NextLink href='/' passHref>
            <Button variant='ghost' as='a' fontSize='sm'>
              <ChevronLeftIcon /> back
            </Button>
          </NextLink>

          {/* Heading */}
          <Heading color='brand.300' size='2xl' mx='auto'>
            login!
          </Heading>

          <Divider />

          {/* Magic Email Login */}
          <MagicEmailForm />

          <Divider />

          {/* Social Logins */}
          <Box mx='auto'>
            <Text color='brand.300'>
              or continue with : <Badge>Recommended</Badge>
            </Text>
            <SocialLogins />
          </Box>
        </Flex>

        {/* Divider */}
        <Divider orientation='vertical' />

        {/* SVG Clip Art */}
        <Image src='/assets/login.svg' alt='login' w='700' h='500' />
      </Flex>
    )
  )
}
