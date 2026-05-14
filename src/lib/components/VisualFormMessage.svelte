<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		type: 'error' | 'success';
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { type, children }: Props = $props();
</script>

<p class="v-form-message" data-type={type}>
	{@render children?.()}
</p>

<style lang="scss">
	.v-form-message {
		font-size: 0.8125rem;

		&[data-type='error'] {
			color: var(--color-error);
		}

		&[data-type='success'] {
			color: var(--color-success);
		}
	}
</style>
