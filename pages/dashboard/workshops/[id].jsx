import ThemedButton from '@/components/micros/ThemedButton'
import { useUser } from '@/hooks'
import { PlusIcon } from '@/icons'
import {
  chakra,
  Divider,
  Flex,
  Icon,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import auth from '@/lib/auth'
import AttendeesList from '@/components/pages/dashboard/AttendeesList'

export default function WorkShopDetailsPage({ attendees }) {
  const { user } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (!user) {
      push('/auth')
    }
  }, [push, user])

  return (
    user && (
      <Flex
        direction='column'
        justify='center'
        align='flex-start'
        experimental_spaceY='4'
      >
        <Flex justify='space-between' align='center' mx='auto' w='full'>
          <StatGroup
            as={Flex}
            justify='center'
            align='center'
            h='82'
            experimental_spaceX='7'
          >
            <Stat>
              <StatLabel>
                total <br />
                <chakra.span fontWeight='bold'>attendees</chakra.span>
              </StatLabel>
              <StatNumber>{attendees.length}</StatNumber>
            </Stat>
          </StatGroup>
          <ThemedButton fontWeight='bold' onClick={{}}>
            <Icon as={PlusIcon} mr='1' />
            import data
          </ThemedButton>
        </Flex>

        <Divider />

        <AttendeesList attendees={attendees} />
      </Flex>
    )
  )
}

export async function getServerSideProps({ params }) {
  const idToken = await auth?.currentUser?.getIdToken()

  const res = await fetch(`http://localhost:3000/api/workshops/${params?.id}`, {
    headers: {
      Authorization: idToken,
    },
  })
  const { workshops } = await res.json()

  return {
    props: {
      workshops,
    },
  }
}
