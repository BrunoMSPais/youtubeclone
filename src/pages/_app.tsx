import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from '../styles/globalstyles'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
