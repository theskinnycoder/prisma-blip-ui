import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import Fonts from '@/styles/Fonts'
import MainLayout from '@/layouts/MainLayout'
import AuthContextProvider from '@/contexts/AuthContext'
import { SWRConfig } from 'swr'
import fetcher from '@/utils/fetcher'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider theme={theme} resetCSS>
        <Fonts />
        <AuthContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthContextProvider>
      </ChakraProvider>
    </SWRConfig>
  )
}

export default MyApp
