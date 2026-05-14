<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		icon: 'message' | 'compass' | 'tempo' | 'data' | 'star' | 'team';
	}

	/**
	 * PROPS
	 */
	let { icon }: Props = $props();
</script>

<div class="v-benefit-icon" style="--this-icon: url('/assets/{icon}.svg')"></div>

<style lang="scss">
	.v-benefit-icon {
		aspect-ratio: 1 / 1;
		background: linear-gradient(30deg, #4c6ccd, #a24ccd);
		-webkit-mask-image: var(--this-icon);
		mask-image: var(--this-icon);
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}
</style>
