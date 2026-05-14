<script lang="ts">
	/**
	 * IMPORTS
	 */
	import VisualForm from './VisualForm.svelte';
	import VisualButton from './VisualButton.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import CompositionInputGroup from './CompositionInputGroup.svelte';
	import CompositionTextareaGroup from './CompositionTextareaGroup.svelte';
	import CompositionInterestPicker from './CompositionInterestPicker.svelte';
	import { checkEmailIsValid } from '$lib/functions';

	/**
	 * VARIABLES
	 */
	let isLoading = $state(false);
	let errors = $state({ email: '', message: '' });

	async function handleFormSubmit(e: SubmitEvent) {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const email = (formData.get('email') as string).trim();
		const message = (formData.get('message') as string).trim();
		const interests = (formData.get('interests') as string).trim();

		const emailIsValid = checkEmailIsValid(email);
		const messageIsValid = !!message;

		if (!email) {
			errors.email = 'Bitte gib eine Email-Adresse ein.';
		} else if (!emailIsValid) {
			errors.email = 'Bitte gib eine gültige Email-Adresse ein.';
		}

		if (!messageIsValid) {
			errors.message = 'Bitte gib eine Nachricht ein.';
		}

		if (errors.email || errors.message) return;

		const start = Date.now();
		const minProcessTime = 2000;
		isLoading = true;

		await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				message,
				interests
			})
		});

		const delay = minProcessTime - (Date.now() - start);
		await new Promise((resolve) => setTimeout(resolve, Math.max(0, delay)));
		isLoading = false;
	}
</script>

<VisualForm onsubmit={handleFormSubmit}>
	<LayoutStack factor={0.75}>
		<CompositionInterestPicker />
		<CompositionInputGroup
			label="Email"
			name="email"
			placeholder="Email-Adresse eingeben"
			required
			isDisabled={isLoading}
			error={errors.email}
		/>
		<CompositionTextareaGroup
			label="Nachricht"
			name="message"
			placeholder="Beschreibe dein Projekt"
			required
			isDisabled={isLoading}
			error={errors.message}
		/>
		<VisualButton variant="primary" isBusy={isLoading}>Abschicken</VisualButton>
	</LayoutStack>
</VisualForm>
