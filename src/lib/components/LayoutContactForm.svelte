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

<svelte:element this={tag} class="l-contact-form">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-contact-form {
		max-width: 23.5rem;
	}
</style>
