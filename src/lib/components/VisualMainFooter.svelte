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

<footer id="main-footer" class="v-main-footer">
	{@render children?.()}
</footer>

<style lang="scss">
	.v-main-footer {
		padding-block: 6rem;
	}
</style>
