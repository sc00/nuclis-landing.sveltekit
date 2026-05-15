<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		isTransparent?: boolean;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { isTransparent = true, children }: Props = $props();
</script>

<header id="main-header" class="v-main-header" data-transparent={isTransparent}>
	{@render children?.()}
</header>

<style lang="scss">
	.v-main-header {
		position: relative;
		padding-block: 1.125rem;
		color: var(--color-text-base-inverse);
		background-color: transparent;
		overflow-x: hidden;
		transition: background-color var(--transition-fast);

		&[data-transparent='false'] {
			background-color: hsla(240, 20%, 15%, 0.5);
			backdrop-filter: blur(1.5rem);
		}
	}
</style>
