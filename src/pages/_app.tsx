import '@styles/globals.scss'
import '@styles/auth/style.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ProgressBar } from '@components/ProgressBar'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProgressBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
