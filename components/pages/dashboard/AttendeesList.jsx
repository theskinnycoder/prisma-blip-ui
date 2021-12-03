import { TrashIcon, VisitIcon } from '@/icons'
import {
  Flex,
  IconButton,
  Link,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function AttendeesList({ attendees }) {
  return (
    <Table>
      <TableCaption placement='top' fontWeight='bold'>
        attendee(s) of this workshop
      </TableCaption>
      <Thead bgColor='brand.900'>
        <Tr>
          <Th>name</Th>
          <Th>email</Th>
          <Th>phone no.</Th>
          <Th textAlign='center'>actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {attendees?.map((attendee) => (
          <Tr key={attendee?.id}>
            <Td>
              <NextLink href={`/dashboard/attendees/${attendee?.id}`} passHref>
                <Link as='a'>{attendee?.name}</Link>
              </NextLink>
            </Td>
            <Td>
              <NextLink href={`/dashboard/attendees/${attendee?.id}`} passHref>
                <Link as='a'>{attendee?.email}</Link>
              </NextLink>
            </Td>
            <Td>{attendee?.phoneNumber}</Td>
            <Td>
              <Flex justify='center' align='center'>
                <NextLink href={`/attendees/${attendee?.id}`} passHref>
                  <IconButton
                    as='a'
                    icon={<VisitIcon />}
                    aria-label='visit'
                    variant='ghost'
                    colorScheme='gray'
                  />
                </NextLink>
                <IconButton
                  icon={<TrashIcon />}
                  aria-label='delete'
                  variant='ghost'
                  colorScheme='red'
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
