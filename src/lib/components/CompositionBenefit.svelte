<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import LayoutBenefitIcon from './LayoutBenefitIcon.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import VisualBenefit from './VisualBenefit.svelte';
	import VisualBenefitIcon from './VisualBenefitIcon.svelte';
	import VisualHeading from './VisualHeading.svelte';
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
			<VisualBenefitIcon {icon} />
		</LayoutBenefitIcon>
		<LayoutStack>
			<VisualHeading tag="h3" appearance="h5">{@render heading?.()}</VisualHeading>
			<VisualParagraph>{@render body?.()}</VisualParagraph>
		</LayoutStack>
	</LayoutStack>
</VisualBenefit>
