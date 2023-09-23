import { ExternalProvider } from 'quais'

declare global {
	interface Window {
		ethereum?: ExternalProvider
	}
}
