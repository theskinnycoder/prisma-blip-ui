import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
} from '@chakra-ui/react'
import links from './links'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useLogout, useUser } from '@/hooks'
import {
  ChevronDownIcon,
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
} from '@/icons'

export default function Header() {
  const { asPath } = useRouter()
  const { user } = useUser()
  const { logout } = useLogout()

  return (
    <Flex
      py={{ base: '4', md: '6' }}
      px={{ base: 6, md: 0 }}
      style={{ top: 0 }}
      pos='sticky'
      bg='transparent'
      backdropFilter={`blur(10px)`}
    >
      <Flex
        minW='container.lg'
        mx='auto'
        as='header'
        align='center'
        justify='space-between'
      >
        <NextLink href='/' passHref>
          <Heading size='lg' color='brand.400' as='a'>
            blip
          </Heading>
        </NextLink>
        <Flex
          as='nav'
          justify='center'
          align='center'
          experimental_spaceX='2'
          ml='-1'
        >
          {links.map((link, idx) => (
            <NextLink key={idx} href={link?.url} passHref>
              <Button
                as='a'
                variant='ghost'
                fontWeight={asPath === link.url ? 'bold' : 'normal'}
              >
                {link.name}
              </Button>
            </NextLink>
          ))}
        </Flex>
        {user !== null ? (
          <Menu isLazy>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant='ghost'
            >
              <Avatar name={user?.handle} src={user?.photoURL} size='sm' />
            </MenuButton>
            <Portal>
              <MenuList bgColor='brand.900'>
                <MenuItem icon={<DashboardIcon />}>dashboard</MenuItem>
                <MenuItem icon={<ProfileIcon />}>profile</MenuItem>
                <MenuDivider />
                <MenuItem icon={<LogoutIcon />} onClick={logout}>
                  logout
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        ) : (
          <NextLink href='/dashboard' passHref>
            <Button
              as='a'
              bgGradient='linear(to-r, yellow.300, brand.400)'
              fontWeight='bold'
              _hover={{
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              }}
            >
              login
            </Button>
          </NextLink>
        )}
      </Flex>
    </Flex>
  )
}
