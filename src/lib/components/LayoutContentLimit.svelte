<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag?: string;
		size?: 'full' | 'regular' | 'narrow';
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', size = 'regular', children }: Props = $props();
</script>

<svelte:element this={tag} class={['l-content-limit', `l-content-limit--${size}`]}>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-content-limit {
		margin-inline: auto;
		padding-inline: 1.25rem;

		&--full {
			max-width: none;
		}

		&--regular {
			max-width: 1300px;
		}

		&--narrow {
			max-width: 1100px;
		}
	}
</style>
