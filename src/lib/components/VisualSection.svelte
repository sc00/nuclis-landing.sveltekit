<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		id?: string;
		scheme?: '1' | '2' | '3';
		hero?: boolean;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { id, scheme = '1', hero, children }: Props = $props();
</script>

<section {id} class={['v-section', `v-section--scheme${scheme}`, hero && 'v-section--hero']}>
	{@render children?.()}
</section>

<style lang="scss">
	.v-section {
		--this-padding-block: 6rem;

		&--scheme1 {
			--this-color: var(--color-scheme1-text);
			--this-background: var(--color-scheme1-background);
		}

		&--scheme2 {
			--this-color: var(--color-scheme2-text);
			--this-background: var(--color-scheme2-background);
		}

		&--scheme3 {
			--this-color: var(--color-scheme3-text);
			--this-background: var(--color-scheme3-background);
		}

		position: relative;
		padding-block: var(--this-padding-block);
		overflow: hidden;
		color: var(--this-color);
		background: var(--this-background);

		&--hero {
			--this-padding-block: 14rem;

			@keyframes blur {
				0% {
					filter: blur(0.125rem) hue-rotate(0deg);
				}
				100% {
					filter: blur(0) hue-rotate(20deg);
				}
			}

			&::before {
				z-index: -1;
				position: absolute;
				inset: -10%;
				content: '';
				background-image: url('/hero-background.jpg');
				background-size: cover;
				background-position: center;
				animation: blur 6s infinite alternate linear;
				will-change: filter;
			}
		}
	}
</style>
