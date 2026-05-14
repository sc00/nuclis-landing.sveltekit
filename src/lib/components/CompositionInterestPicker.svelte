<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutChips from './LayoutChips.svelte';
	import VisualChip from './VisualChip.svelte';
	import VisualHeading from './VisualHeading.svelte';
	import VisualInput from './VisualInput.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import { interestOptions } from '$lib/constants';

	/**
	 * VARIABLES
	 */
	let interestItems = $state(
		interestOptions.map((option, index) => ({ ...option, isPressed: index === 0 }))
	);
	let selectedList = $derived(
		interestItems
			.filter((option) => option.isPressed)
			.map((option) => option.value)
			.join(',')
	);
</script>

<LayoutStack factor={0.5}>
	<VisualHeading tag="h3" appearance="h5">Ich interessiere mich für...</VisualHeading>
	<LayoutChips>
		{#each interestItems as interest (interest.value)}
			<VisualChip
				value={interest.value}
				isPressed={interest.isPressed}
				onclick={() => (interest.isPressed = !interest.isPressed)}>{interest.label}</VisualChip
			>
		{/each}
	</LayoutChips>
	<VisualInput type="hidden" name="interests" value={selectedList} />
</LayoutStack>
