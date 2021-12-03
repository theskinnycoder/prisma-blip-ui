import { Divider, Flex, IconButton } from '@chakra-ui/react'
import { useCustomToast, useSocialLogin } from '@/hooks'
import { GitHubIcon, GoogleIcon, TwitterIcon } from '@/icons'

export default function SocialLogins() {
  const { loginWithSocials, error } = useSocialLogin()
  const toast = useCustomToast()

  async function loginWithProvider({ provider }) {
    const loggedInUser = await loginWithSocials({ provider })

    if (error && !loggedInUser) {
      toast({
        title: "Coudn't login...😞",
        description: error,
        status: 'error',
      })
    } else {
      toast({
        title: 'Login Successful! 😍',
        description: `Welcome back, ${loggedInUser?.handle}`,
        status: 'success',
      })
    }
  }

  return (
    <Flex justify='space-evenly' align='center' experimental_spaceX='5' h='14'>
      <IconButton
        colorScheme='gray'
        icon={<GoogleIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'GOOGLE' })}
      />
      <Divider orientation='vertical' />
      <IconButton
        colorScheme='gray'
        color='twitter.500'
        icon={<TwitterIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'TWITTER' })}
      />
      <Divider orientation='vertical' />
      <IconButton
        colorScheme='gray'
        icon={<GitHubIcon />}
        fontSize='2xl'
        onClick={() => loginWithProvider({ provider: 'GITHUB' })}
      />
    </Flex>
  )
}
