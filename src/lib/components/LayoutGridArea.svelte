<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: string;
		name: string;
		children?: Snippet;
	}

	let { tag = 'div', name, children }: Props = $props();
</script>

<svelte:element this={tag} class="l-grid-area" style="grid-area: {name}">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-grid-area {
		min-width: 0;
	}
</style>
