<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag?: string;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-benefits">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-benefits {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
	}
</style>
