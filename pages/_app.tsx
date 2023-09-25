import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@react95/core'
import GlobalStyle from '../src/components/style/R95Style'
import { createGlobalStyle } from 'styled-components'
import { StateProvider } from '../src/utils/store'

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
	return (
		<ThemeProvider>
			<GlobalStyle />
			<CustomGlobalStyle />
			<StateProvider>
				<Component {...pageProps} />
			</StateProvider>
		</ThemeProvider>
	)
}
