import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@react95/core'
import GlobalStyle from '../src/components/style/R95Style'
import { StateProvider } from '../src/utils/store'
import '../src/styles/globals.css'

const CustomGlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    background-color: none;
  }

  img {
    pointer-events: none;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeName>()
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <GlobalStyle />
        <CustomGlobalStyle />
        <Component {...{ pageProps, setTheme }} />
      </StateProvider>
    </ThemeProvider>
  )
}
