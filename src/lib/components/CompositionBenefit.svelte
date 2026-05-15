<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import LayoutBenefitIcon from './LayoutBenefitIcon.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import VisualBenefit from './VisualBenefit.svelte';
	import VisualHeading from './VisualHeading.svelte';
	import VisualIcon from './VisualIcon.svelte';
	import VisualParagraph from './VisualParagraph.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		heading: Snippet;
		body: Snippet;
		icon: 'message' | 'compass' | 'tempo' | 'data' | 'star' | 'team';
	}

	/**
	 * PROPS
	 */
	let { icon, heading, body }: Props = $props();
</script>

<VisualBenefit>
	<LayoutStack factor={1}>
		<LayoutBenefitIcon>
			<VisualIcon name={icon} background="linear-gradient(30deg, #4c6ccd, #a24ccd)" />
		</LayoutBenefitIcon>
		<LayoutStack>
			<VisualHeading tag="h3" appearance="h5">{@render heading?.()}</VisualHeading>
			<VisualParagraph>{@render body?.()}</VisualParagraph>
		</LayoutStack>
	</LayoutStack>
</VisualBenefit>
