<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutFullWidth from './LayoutFullWidth.svelte';
	import LayoutInputGroup from './LayoutInputGroup.svelte';
	import VisualInputLabel from './VisualInputLabel.svelte';
	import VisualInput from './VisualInput.svelte';

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
	}

	/**
	 * PROPS
	 */
	let {
		label,
		name,
		id = name,
		type = 'text',
		placeholder,
		required,
		isDisabled
	}: Props = $props();
</script>

<LayoutInputGroup>
	{#if label}
		<VisualInputLabel {label} labelFor={name} {required} />
	{/if}
	<LayoutFullWidth>
		<VisualInput {id} {type} {name} {placeholder} {required} {isDisabled} />
	</LayoutFullWidth>
</LayoutInputGroup>
