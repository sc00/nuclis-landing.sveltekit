<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		name: string;
		label?: string;
		background?: string;
	}

	/**
	 * PROPS
	 */
	let { name, label, background = 'currentColor' }: Props = $props();
</script>

<span
	class="v-icon"
	role={label && 'img'}
	aria-label={label}
	style="--this-icon: url('/assets/{name}.svg'); --icon-bg: {background}"
></span>

<style lang="scss">
	.v-icon {
		background: var(--icon-bg, currentColor);
		mask: var(--this-icon) no-repeat center / contain;
		-webkit-mask: var(--this-icon) no-repeat center / contain;
	}
</style>
