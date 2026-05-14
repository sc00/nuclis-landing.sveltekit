<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		align?: 'start' | 'center' | 'end';
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { align = 'start', children }: Props = $props();
</script>

<p class={['v-paragraph', `v-paragraph--align-${align}`]}>{@render children?.()}</p>

<style lang="scss">
	.v-paragraph {
		&--align-start {
			text-align: start;
		}

		&--align-center {
			text-align: center;
		}

		&--align-end {
			text-align: end;
		}
	}
</style>
