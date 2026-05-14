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

<svelte:element this={tag} class="l-hero-buttons">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-hero-buttons {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-block-start: 2.5rem;
	}
</style>
