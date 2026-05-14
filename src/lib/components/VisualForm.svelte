<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	/**
	 * TYPES
	 */
	interface Props {
		element?: HTMLFormElement | null;
		action?: string;
		method?: 'POST' | 'GET';
		novalidate?: boolean;
		onsubmit?: SubmitFunction;
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
	use:enhance={onsubmit}
>
	{@render children?.()}
</form>
