// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'svelte-scrollto' {
	export function scrollTo(options: any): void;
	export function scrollToTop(): void;
	export function scrollToBottom(): void;
	export const animateScroll: any;
}

declare module '$env/static/private' {
	export const OPENAI_API_KEY: string;
	export const OMDB_API_KEY: string;
}

export {};
