import { ExternalProvider } from 'quais/src.ts/quais/'

declare global {
	interface Window {
		ethereum?: ExternalProvider
	}
}
