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
			font-size: clamp(2.5rem, 7vw, 4.75rem);
			font-weight: 500;
			line-height: 1.15;
		}

		&--appearance-h2 {
			font-size: clamp(2rem, 5vw, 2.5rem);
			font-weight: 500;
			line-height: 1.15;
		}

		&--appearance-h3 {
			font-size: clamp(1.25rem, 3.1vw, 1.5rem);
			font-weight: 500;
			line-height: 1.3;
		}

		&--appearance-h4 {
			font-size: clamp(1.125rem, 2.9vw, 1.25rem);
			font-weight: 500;
			line-height: 1.3;
		}

		&--appearance-h5 {
			font-size: clamp(1.0625rem, 2.8vw, 1.125rem);
			font-weight: 500;
			line-height: 1.3;
		}

		&--appearance-h6 {
			font-size: 1.0625rem;
			font-weight: 300;
			line-height: 1.4;
		}
	}
</style>
