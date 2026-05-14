<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutFullWidth from './LayoutFullWidth.svelte';
	import LayoutInputGroup from './LayoutInputGroup.svelte';
	import VisualInputLabel from './VisualInputLabel.svelte';
	import VisualInput from './VisualInput.svelte';
	import VisualFormMessage from './VisualFormMessage.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		label?: string;
		name: string;
		id?: string;
		type?: string;
		placeholder?: string;
		required?: boolean;
		isDisabled?: boolean;
		error?: string;
	}

	/**
	 * PROPS
	 */
	let { label, name, id = name, type = 'text', placeholder, required, isDisabled, error }: Props =
		$props();

	/**
	 * VARIABLES
	 */
	let hasError = $derived(Boolean(error));
</script>

<LayoutInputGroup>
	{#if label}
		<VisualInputLabel {label} labelFor={name} {required} {hasError} />
	{/if}
	<LayoutFullWidth>
		<VisualInput {id} {type} {name} {placeholder} {required} {isDisabled} {hasError} />
	</LayoutFullWidth>
	{#if error}
		<VisualFormMessage type="error">{error}</VisualFormMessage>
	{/if}
</LayoutInputGroup>
