<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		align?: 'start' | 'center' | 'end';
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag, align = 'start', appearance = tag, children }: Props = $props();
</script>

<svelte:element
	this={tag}
	class={['v-heading', `v-heading--appearance-${appearance}`, `v-heading--align-${align}`]}
	>{@render children?.()}</svelte:element
>

<style lang="scss">
	.v-heading {
		// text-shadow: 0px 0 4em hsla(215, 20%, 20%, 0.2);

		&--align-start {
			text-align: start;
		}

		&--align-center {
			text-align: center;
		}

		&--align-end {
			text-align: end;
		}

		&--appearance-h1 {
			font-size: 4.75rem;
			font-weight: 500;
			line-height: 1.12;
		}

		&--appearance-h2 {
			font-size: 2.5rem;
			font-weight: 500;
			line-height: 1.12;
		}

		&--appearance-h3 {
			font-size: 1.5rem;
			font-weight: 500;
			line-height: 1.2;
		}

		&--appearance-h4 {
			font-size: 1.25rem;
			font-weight: 500;
			line-height: 1.2;
		}

		&--appearance-h5 {
			font-size: 1.125rem;
			font-weight: 500;
			line-height: 1.2;
		}

		&--appearance-h6 {
			font-size: 1.0625rem;
			font-weight: 300;
			line-height: 1.6;
		}
	}
</style>
