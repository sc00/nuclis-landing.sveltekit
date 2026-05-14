<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();
</script>

<div class="l-full-width">
	{@render children?.()}
</div>

<style lang="scss">
	.l-full-width {
		flex-shrink: 0;
		display: grid;
		justify-items: stretch;
		width: 100%;
	}
</style>
