import {
  Button,
  chakra,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react'
import TypeWriter from 'react-typing-effect'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@/icons'
import ThemedButton from '@/components/micros/ThemedButton'

export default function HeroSection() {
  return (
    <Flex>
      <Flex direction='column' justify='center' align='flex-start'>
        <Flex
          w='full'
          direction='column'
          justify='left'
          align='flex-start'
          textAlign='left'
          mb='10'
          experimental_spaceY='3'
        >
          <Heading fontSize='9xl'>
            <chakra.span color='brand.500'>blip</chakra.span>
            <chakra.sub fontSize='md'>noun, /blɪp/</chakra.sub>
          </Heading>
          <Heading fontSize='4xl'>
            a one-stop service for <br />
            <chakra.span
              bgGradient='linear(to-r, pink.500, yellow.400, brand.500)'
              bgClip='text'
            >
              <TypeWriter
                text={[
                  'ed-tech startups',
                  'small-scale businesses',
                  'freelance educators',
                ]}
                eraseDelay={700}
                eraseSpeed={20}
                typingDelay={300}
                speed={100}
              />
            </chakra.span>
          </Heading>
          <Text maxW='2xl' fontSize='md'>
            millions of startups, &amp; oodles of data...
            <br />
            use{' '}
            <chakra.span fontWeight='semibold' color='brand.400'>
              blip
            </chakra.span>{' '}
            and its APIs to import your data to a hosted database from Excel
            sheets, Google sheets, CSV files, etc, &amp; query, check,
            visualize, &amp; delete it.
          </Text>
        </Flex>
        <Flex justify='center' align='center' experimental_spaceX='5'>
          <NextLink href='/dashboard' passHref>
            <ThemedButton as='a' size='lg' pr='3.5'>
              <Text>lemme try</Text>
              <Icon as={ChevronRightIcon} fontSize='2xl' mb='-0.5' />
            </ThemedButton>
          </NextLink>
          <NextLink href='#contact' passHref>
            <Button size='lg' variant='outline' as='a'>
              bro, what?
            </Button>
          </NextLink>
        </Flex>
      </Flex>
      <Image
        src='/assets/hero.svg'
        alt='hero'
        height='400'
        width='500'
        mr='-60px'
      />
    </Flex>
  )
}
