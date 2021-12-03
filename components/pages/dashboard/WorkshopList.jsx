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

export default function WorkshopList({ workshops }) {
  return (
    <Table>
      <TableCaption placement='top' fontWeight='bold'>
        your workshops
      </TableCaption>
      <Thead bgColor='brand.900'>
        <Tr>
          <Th>name</Th>
          <Th isNumeric>attendees</Th>
          <Th textAlign='center'>actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {workshops?.map((workshop) => (
          <Tr key={workshop?.id}>
            <Td>
              <NextLink href={`/dashboard/workshops/${workshop?.id}`} passHref>
                <Link as='a'>{workshop?.name}</Link>
              </NextLink>
            </Td>
            <Td isNumeric>{workshop?.attendees?.length || 0}</Td>
            <Td>
              <Flex justify='center' align='center'>
                <NextLink href={`/workshops/${workshop?.id}`} passHref>
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
