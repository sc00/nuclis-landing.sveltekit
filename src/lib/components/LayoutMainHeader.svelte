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

<svelte:element this={tag} class="l-main-header">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-main-header {
		z-index: 999;
		position: absolute;
		inset: 0 0 auto;
	}
</style>
