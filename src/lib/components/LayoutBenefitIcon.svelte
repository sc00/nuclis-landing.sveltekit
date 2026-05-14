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

<svelte:element this={tag} class="l-benefit-icon">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-benefit-icon {
		width: 2.125rem;
	}
</style>
