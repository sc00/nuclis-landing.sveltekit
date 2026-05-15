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

<dd class="v-definition-detail">{@render children?.()}</dd>

<style lang="scss">
	.v-definition-detail {
		margin-inline-start: 0;
	}
</style>
