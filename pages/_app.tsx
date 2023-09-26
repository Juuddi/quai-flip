import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@react95/core'
import GlobalStyle from '../src/components/style/R95Style'
import { createGlobalStyle } from 'styled-components'
import { StateProvider } from '../src/utils/store'
import { useState, useEffect, Dispatch } from 'react'

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

	console.log('theme', theme)
	return (
		<StateProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<CustomGlobalStyle />
				<Component {...{ pageProps, setTheme }} />
			</ThemeProvider>
		</StateProvider>
	)
}
