<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutFullWidth from './LayoutFullWidth.svelte';
	import LayoutInputGroup from './LayoutInputGroup.svelte';
	import VisualInputLabel from './VisualInputLabel.svelte';
	import VisualTextarea from './VisualTextarea.svelte';

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
	}

	/**
	 * PROPS
	 */
	let { label, name, id = name, rows = 5, placeholder, required, isDisabled }: Props = $props();
</script>

<LayoutInputGroup>
	{#if label}
		<VisualInputLabel {label} labelFor={name} {required} />
	{/if}
	<LayoutFullWidth>
		<VisualTextarea {id} {name} {rows} {placeholder} {required} {isDisabled} />
	</LayoutFullWidth>
</LayoutInputGroup>
