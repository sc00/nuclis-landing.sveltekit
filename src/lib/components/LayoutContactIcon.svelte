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

<svelte:element this={tag} class="l-contact-icon">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-contact-icon {
		position: relative;
		top: 0.25rem;
		display: grid;
		width: 1.25rem;
		aspect-ratio: 1 / 1;
	}
</style>
