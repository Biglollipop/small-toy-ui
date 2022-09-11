/// <reference types="vite/client" />

declare global {
	type Recordable<T = any> = Record<string, T>
	declare interface ImportMetaEnv {
		VITE_APP_TITLE: string
		VITE_PUBLIC_PATH: string
		VITE_PORT: number
		VITE_API_BASE_URL: string
	}
}

export {}