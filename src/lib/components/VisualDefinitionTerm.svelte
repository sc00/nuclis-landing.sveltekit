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

<dt class="v-definition-term">{@render children?.()}</dt>

<style lang="scss">
	.v-definition-term {
		font-weight: 400;
		color: hsl(240, 8%, 58%);
	}
</style>
