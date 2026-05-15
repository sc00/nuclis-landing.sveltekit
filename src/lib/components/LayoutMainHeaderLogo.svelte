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

<svelte:element this={tag} class="l-main-header-logo">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-main-header-logo {
		position: relative;
		top: -0.25rem;
		width: 5rem;
	}
</style>
