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

<svelte:element this={tag} class="l-chips">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-chips {
		--chip-flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 0.4375rem;
		max-width: 22rem;
	}
</style>
