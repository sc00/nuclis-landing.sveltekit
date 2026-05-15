<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		name: string;
		label?: string;
	}

	/**
	 * PROPS
	 */
	let { name, label }: Props = $props();
</script>

<span
	class="v-icon"
	role={label && 'img'}
	aria-label={label}
	style="--this-icon: url('/assets/{name}.svg')"
></span>

<style lang="scss">
	.v-icon {
		background-color: currentColor;
		mask: var(--this-icon) no-repeat center / contain;
		-webkit-mask: var(--this-icon) no-repeat center / contain;
	}
</style>
