<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type FormEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		name: string;
		id?: string;
		placeholder?: string;
		rows: number;
		maxlength?: number;
		value?: string;
		required?: boolean;
		isDisabled?: boolean;
		hasError?: boolean;
		oninput?: FormEventHandler<HTMLTextAreaElement>;
	}

	/**
	 * PROPS
	 */
	let {
		name,
		id = name,
		placeholder,
		rows = 5,
		maxlength,
		value = $bindable(),
		required,
		isDisabled,
		hasError,
		oninput
	}: Props = $props();
</script>

<textarea
	{id}
	class="v-textarea"
	{name}
	{placeholder}
	{rows}
	{maxlength}
	bind:value
	disabled={isDisabled}
	aria-required={required ? 'true' : null}
	aria-invalid={hasError ? 'true' : null}
	{oninput}
></textarea>

<style lang="scss">
	.v-textarea {
		padding: 0.5rem 0.875rem 0.5rem;
		border: solid thin hsl(230, 8%, 48%);
		border-radius: 0.375rem;
		resize: none;
		transition:
			color var(--transition-fast),
			background-color var(--transition-fast);

		&::placeholder {
			font-size: 1rem;
			color: hsl(230, 10%, 55%);
		}

		&:disabled {
			color: hsl(230, 8%, 38%);
			background-color: hsl(230, 8%, 97%);
			border-color: hsl(230, 8%, 78%);
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
