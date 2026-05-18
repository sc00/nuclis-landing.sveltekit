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

<svelte:element this={tag} class="l-fold">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-fold {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 32rem), 1fr));
		gap: 1rem 2rem;
	}
</style>
