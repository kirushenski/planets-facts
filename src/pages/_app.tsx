import Head from 'next/head'
import 'focus-visible'
import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import GlobalStyle from '~lib/globalStyle'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Opinionated setup of Next.js-based project" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
