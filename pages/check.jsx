import { useMagicLink } from '@/hooks'
import { Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CheckAuthPage() {
  const { query, push } = useRouter()
  const { error, loginWithMagicLink } = useMagicLink()

  useEffect(() => {
    ;(async () => {
      if (query?.oobCode) {
        const loggedInUser = await loginWithMagicLink()
        if (!error && loggedInUser) {
          push('/dashboard')
        }
      } else {
        push('/')
      }
    })()
  }, [error, loginWithMagicLink, query, push])

  return (
    <Flex
      direction='column'
      justify='center'
      align='flex-start'
      experimental_spaceY='4'
    >
      <Heading>checking, please wait...</Heading>
    </Flex>
  )
}
