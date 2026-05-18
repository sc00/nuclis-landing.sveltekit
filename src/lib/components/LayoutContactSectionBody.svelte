<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: string;
		children?: Snippet;
	}

	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-contact-section-body">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-contact-section-body {
		display: grid;
		grid-template-areas:
			'head'
			'card'
			'contact';
		justify-items: start;
		gap: 2rem 3rem;

		@media screen and (min-width: 40rem) {
			// grid-template-areas:
			// 	'head head'
			// 	'contact card';
			// grid-template-columns: 1fr 2fr;
			// grid-template-rows: auto 1fr;
		}

		@media screen and (min-width: 60rem) {
			grid-template-areas:
				'head card'
				'contact card';
			grid-template-columns: 1fr 29rem;
			grid-template-rows: 12rem 1fr;
			gap: 2rem 5rem;
		}
	}
</style>
