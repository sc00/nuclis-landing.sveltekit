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
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'dl', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-definition-list">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-definition-list {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: baseline;
		gap: 0.75rem;
	}
</style>
