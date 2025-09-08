declare module 'svelte-scrollto' {
	export const animateScroll: {
		scrollToBottom: () => void;
		scrollToTop: () => void;
		scrollTo: (options: any) => void;
	};
}
