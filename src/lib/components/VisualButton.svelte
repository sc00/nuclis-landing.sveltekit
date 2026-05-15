<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag?: 'button' | 'a';
		variant: 'primary' | 'secondary';
		size?: 'small';
		href?: string;
		target?: string;
		isDisabled?: boolean;
		isBusy?: boolean;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let {
		tag = 'button',
		variant,
		size,
		href,
		target,
		isDisabled,
		isBusy,
		children
	}: Props = $props();
</script>

<svelte:element
	this={tag}
	class={['v-button', `v-button--${variant}`, size && `v-button--${size}`]}
	href={tag === 'a' ? href : null}
	target={tag === 'a' ? target : null}
	role={tag === 'a' ? 'button' : null}
	tabindex="0"
	disabled={isDisabled || isBusy}
	aria-busy={isBusy ? 'true' : null}
>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.v-button {
		padding: 0.625rem 1.5rem 0.5625rem;
		font-size: 1rem;
		text-decoration: none;
		border: none;
		border-radius: 99px;
		transition: background var(--transition-base);

		&:hover {
			opacity: 0.9;
		}

		&:disabled {
			opacity: 0.9;
			pointer-events: none;
		}

		&--primary {
			background: linear-gradient(30deg, #4c6ccd, #a24ccd);
			color: var(--color-light);
		}

		&--secondary {
			background-color: transparent;
			color: inherit;
			border: solid thin;
		}

		&--small {
			padding: 0.4375rem 1.125rem 0.375rem;
			font-size: 0.9375rem;

			&::after {
				width: 1.25rem;
				height: 0.75rem;
				margin-left: 0.5rem;
			}
		}

		&::before,
		&::after {
			display: inline-block;
			-webkit-mask-size: contain;
			mask-size: contain;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-position: center;
			mask-position: center;
			transition: translate var(--transition-fast);
		}

		&::after {
			width: 1.75rem;
			height: 1rem;
			margin-left: 0.75rem;
			content: '';
			background-color: currentColor;
			translate: 0 0.1875rem;
			-webkit-mask-image: url('/assets/arrow-right.svg');
			mask-image: url('/assets/arrow-right.svg');
		}

		&:hover {
			&::after {
				translate: 0.125rem 0.1875rem;
			}
		}
	}
</style>
