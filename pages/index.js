import HeroSection from '@/components/pages/home/HeroSection'
import { Divider, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex experimental_spaceY='20' direction='column'>
      <HeroSection />
      <Divider />
    </Flex>
  )
}
