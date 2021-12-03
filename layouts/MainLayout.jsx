import Header from '@/components/Header'
import { Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function MainLayout({ children }) {
  const { pathname } = useRouter()

  return (
    <>
      {pathname !== '/auth' && <Header />}
      <Container
        px='0'
        maxW='container.lg'
        as='main'
        py={{
          base: '4',
          md: '10',
        }}
      >
        {children}
      </Container>
    </>
  )
}
