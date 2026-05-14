<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		element?: HTMLFormElement | null;
		action?: string;
		method?: 'POST' | 'GET';
		novalidate?: boolean;
		onsubmit?: (e: SubmitEvent) => void;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let {
		element = $bindable(),
		action,
		method = 'POST',
		novalidate = true,
		onsubmit,
		children
	}: Props = $props();
</script>

<form
	class="v-form"
	{action}
	{method}
	novalidate={novalidate ? true : null}
	bind:this={element}
	{onsubmit}
>
	{@render children?.()}
</form>
