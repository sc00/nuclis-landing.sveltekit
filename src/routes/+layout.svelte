<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import '$lib/styles/global.scss';
	import favicon from '$lib/assets/favicon.svg';
	import LayoutContentLimit from '$lib/components/LayoutContentLimit.svelte';
	import LayoutMainHeader from '$lib/components/LayoutMainHeader.svelte';
	import LayoutMainHeaderInner from '$lib/components/LayoutMainHeaderInner.svelte';
	import LayoutMainHeaderLogo from '$lib/components/LayoutMainHeaderLogo.svelte';
	import LayoutPage from '$lib/components/LayoutPage.svelte';
	import VisualButton from '$lib/components/VisualButton.svelte';
	import VisualLogoCombined from '$lib/components/VisualLogoCombined.svelte';
	import VisualMainContent from '$lib/components/VisualMainContent.svelte';
	import VisualMainFooter from '$lib/components/VisualMainFooter.svelte';
	import VisualMainHeader from '$lib/components/VisualMainHeader.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();

	/**
	 * CONSTANTS
	 */
	const threshold = 500;

	/**
	 * VARIABLES
	 */
	let scrolledPastThreshold = $state(true);

	/**
	 * FUNCTIONS
	 */
	function handleScroll() {
		scrolledPastThreshold = window.scrollY < threshold;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window onscroll={handleScroll} />

<LayoutPage>
	<LayoutMainHeader>
		<VisualMainHeader isTransparent={scrolledPastThreshold}>
			<LayoutContentLimit size="full">
				<LayoutMainHeaderInner>
					<LayoutMainHeaderLogo>
						<VisualLogoCombined />
					</LayoutMainHeaderLogo>
					<VisualButton tag="a" href="#get-in-touch" variant="secondary" size="small"
						>Jetzt anfragen</VisualButton
					>
				</LayoutMainHeaderInner>
			</LayoutContentLimit>
		</VisualMainHeader>
	</LayoutMainHeader>
	<VisualMainContent>
		{@render children()}
	</VisualMainContent>
	<VisualMainFooter></VisualMainFooter>
</LayoutPage>
