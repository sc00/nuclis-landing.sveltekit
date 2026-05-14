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
		factor?: number;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', factor = 0.5, children }: Props = $props();
</script>

<svelte:element this={tag} class="l-stack" style="--this-factor: {factor};">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-stack {
		display: grid;
		align-items: start;
		gap: calc(1rem * var(--this-factor));
	}
</style>
