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

<svelte:element this={tag} class="l-input-group">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-input-group {
		display: grid;
		gap: 0.25rem;
		justify-items: start;
	}
</style>
