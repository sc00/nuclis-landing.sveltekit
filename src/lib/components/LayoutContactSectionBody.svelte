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
		gap: 2rem 3rem;

		@media (min-width: 40rem) {
			grid-template-areas:
				'head head'
				'card contact';
			grid-template-columns: auto 1fr;
			grid-template-rows: auto 1fr;
		}

		@media (min-width: 60rem) {
			grid-template-areas:
				'head card'
				'contact card';
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 12rem 1fr;
			gap: 2rem calc(12vw - 4rem);
		}
	}
</style>
