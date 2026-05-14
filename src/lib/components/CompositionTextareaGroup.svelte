<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutFullWidth from './LayoutFullWidth.svelte';
	import LayoutInputGroup from './LayoutInputGroup.svelte';
	import VisualInputLabel from './VisualInputLabel.svelte';
	import VisualTextarea from './VisualTextarea.svelte';
	import VisualFormMessage from './VisualFormMessage.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		label?: string;
		name: string;
		id?: string;
		rows?: number;
		placeholder?: string;
		required?: boolean;
		isDisabled?: boolean;
		error?: string;
	}

	/**
	 * PROPS
	 */
	let { label, name, id = name, rows = 5, placeholder, required, isDisabled, error }: Props =
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
		<VisualTextarea {id} {name} {rows} {placeholder} {required} {isDisabled} {hasError} />
	</LayoutFullWidth>
	{#if error}
		<VisualFormMessage type="error">{error}</VisualFormMessage>
	{/if}
</LayoutInputGroup>
