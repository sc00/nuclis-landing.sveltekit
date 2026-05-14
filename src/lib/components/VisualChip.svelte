<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		value: string;
		isPressed?: boolean;
		onclick?: () => void;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { value, isPressed = false, onclick, children }: Props = $props();
</script>

<button class="v-chip" type="button" {value} aria-pressed={isPressed} {onclick}>
	{@render children?.()}
</button>

<style lang="scss">
	.v-chip {
		flex-grow: var(--chip-flex-grow, 0);
		padding: 0.375rem 1rem 0.3125rem;
		font-size: 0.875rem;
		border: solid thin currentColor;
		border-radius: 0.375rem;
		background-color: transparent;
		color: inherit;
		cursor: pointer;
		transition:
			background var(--transition-fast),
			color var(--transition-fast),
			border-color var(--transition-fast);

		&[aria-pressed='true'] {
			background-color: hsl(230, 25%, 42%);
			border-color: transparent;
			color: var(--color-light);
		}

		&:hover:not([aria-pressed='true']) {
			opacity: 0.8;
		}
	}
</style>
