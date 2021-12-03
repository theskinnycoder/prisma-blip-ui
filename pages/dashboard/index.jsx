import ThemedButton from '@/components/micros/ThemedButton'
import NewWorkshopForm from '@/components/pages/dashboard/NewWorkshopForm'
import WorkshopList from '@/components/pages/dashboard/WorkshopList'
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
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import auth from '@/lib/auth'

export default function DashboardPage({ totalAttendees, workshops }) {
  const { user } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (!user) {
      push('/auth')
    }
  }, [push, user])

  const { isOpen, onOpen, onClose } = useDisclosure()

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
                <chakra.span fontWeight='bold'>workshops</chakra.span>
              </StatLabel>
              <StatNumber>{workshops?.length}</StatNumber>
            </Stat>
            <Divider orientation='vertical' />
            <Stat>
              <StatLabel>
                total <br />
                <chakra.span fontWeight='bold'>attendees</chakra.span>
              </StatLabel>
              <StatNumber>{totalAttendees}</StatNumber>
            </Stat>
          </StatGroup>
          <ThemedButton fontWeight='bold' onClick={onOpen}>
            <Icon as={PlusIcon} mr='1' />
            new workshop
          </ThemedButton>
        </Flex>
        <NewWorkshopForm isOpen={isOpen} onClose={onClose} />

        <Divider />

        <WorkshopList workshops={workshops} />
      </Flex>
    )
  )
}

export async function getServerSideProps() {
  const idToken = await auth?.currentUser?.getIdToken()

  const res = await fetch('http://localhost:3000/api/workshops', {
    headers: {
      authorization: idToken,
    },
  })
  const { data: workshops } = await res.json()
  const totalAttendees = workshops?.reduce((acc, workshop) => {
    return acc + workshop?.attendees?.length
  }, 0)

  return {
    props: {
      totalAttendees,
      workshops,
    },
  }
}
