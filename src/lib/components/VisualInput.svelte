<script lang="ts">
	import {
		type FullAutoFill,
		type FocusEventHandler,
		type FormEventHandler
	} from 'svelte/elements';
	/**
	 * TYPES
	 */
	interface Props {
		id: string;
		type: string;
		name: string;
		placeholder?: string;
		autocomplete?: FullAutoFill;
		value?: string;
		required?: boolean;
		isDisabled?: boolean;
		hasError?: boolean;
		oninput?: FormEventHandler<HTMLInputElement>;
		onclick?: FocusEventHandler<HTMLInputElement>;
		onfocus?: FocusEventHandler<HTMLInputElement>;
		onblur?: FocusEventHandler<HTMLInputElement>;
	}
	/**
	 * PROPS
	 */
	let {
		id,
		type,
		name,
		placeholder,
		autocomplete,
		value = $bindable(),
		required,
		isDisabled,
		hasError,
		oninput,
		onclick,
		onfocus,
		onblur
	}: Props = $props();
</script>

<input
	{id}
	class={['v-input', hasError && 'v-input--error']}
	{type}
	{name}
	{placeholder}
	{autocomplete}
	bind:value
	disabled={isDisabled}
	aria-required={required ? 'true' : null}
	aria-invalid={hasError ? 'true' : null}
	{oninput}
	{onclick}
	{onfocus}
	{onblur}
/>

<style lang="scss">
	.v-input {
		position: relative;
		padding: 0.5rem 0.875rem 0.5rem;
		font-size: 1rem;
		border: solid thin hsl(230, 8%, 48%);
		border-radius: 0.375rem;
		transition:
			color var(--transition-fast),
			background-color var(--transition-fast);

		&::placeholder {
			color: hsl(222, 10%, 55%);
		}

		&:disabled {
			color: hsl(230, 8%, 38%);
			background-color: hsl(230, 8%, 97%);
			border-color: hsl(230, 8%, 75%);
		}

		&[aria-invalid='true'] {
			padding-right: 2.5rem;
			border-color: hsl(0, 75%, 46%);
			background-image: url('/assets/alert-triangle.svg');
			background-size: 1rem;
			background-repeat: no-repeat;
			background-position: right 0.75rem center;
		}
	}
</style>
