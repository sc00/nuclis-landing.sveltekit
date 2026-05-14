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

<div class="v-card">
	{@render children?.()}
</div>

<style lang="scss">
	.v-card {
		padding: 2rem;
		background-color: #ffffff;
		border-radius: 0.5rem;
		box-shadow: 0 0 3rem 0 hsla(240, 20%, 10%, 0.1);
	}
</style>
