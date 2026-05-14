<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		label: string;
		labelFor: string;
		required?: boolean;
		isDisabled?: boolean;
		hasError?: boolean;
	}

	/**
	 * PROPS
	 */
	let { label, labelFor, required, isDisabled, hasError = false }: Props = $props();
</script>

<label
	class="v-input-label"
	for={labelFor}
	aria-required={required ? 'true' : null}
	aria-disabled={isDisabled ? 'true' : null}
	aria-invalid={hasError ? 'true' : null}>{label}</label
>

<style lang="scss">
	.v-input-label {
		font-size: 0.875rem;

		&[aria-required='true'] {
			&::after {
				display: inline-block;
				margin-left: 0.25rem;
				color: hsl(340, 60%, 50%);
				content: '*';
			}
		}

		&[aria-disabled='true'] {
			color: hsl(208, 8%, 50%);
			cursor: default;
		}

		&[aria-invalid='true'] {
			color: var(--color-error);
		}
	}
</style>
