import Head from 'next/head'
import 'focus-visible'
import { AppProps } from 'next/app'
import localFont from '@next/font/local'
import GlobalStyle from '~lib/globalStyle'

const antonio = localFont({ src: '../assets/fonts/Antonio-Medium.woff2', weight: '500' })
const spartan = localFont({
  src: [
    { path: '../assets/fonts/Spartan-Bold.woff2', weight: '700' },
    { path: '../assets/fonts/Spartan-Regular.woff2', weight: '400' },
  ],
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-antonio: ${antonio.style.fontFamily};
          --font-family-spartan: ${spartan.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Head>
        <title>Planets facts</title>
        <meta name="description" content="Facts about Solar system planets" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#070724" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
