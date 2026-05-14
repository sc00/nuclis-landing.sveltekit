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

<div class="v-benefit">
	{@render children?.()}
</div>

<style lang="scss">
	.v-benefit {
		position: relative;
		padding: 0.1875rem 1.25rem 0.4375rem;

		&::before {
			position: absolute;
			inset: 0 auto 0 0;
			width: 0.1875rem;
			content: '';
			background-color: hsl(240, 6%, 90%);
		}

		&::after {
			position: absolute;
			inset: 0 auto auto 0;
			width: 0.1875rem;
			height: 2.625rem;
			content: '';
			background: linear-gradient(30deg, #4c6ccd, #a24ccd);
		}
	}
</style>
