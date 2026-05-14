<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutContentLimit from '$lib/components/LayoutContentLimit.svelte';
	import LayoutHeroButtons from '$lib/components/LayoutHeroButtons.svelte';
	import LayoutFold from '$lib/components/LayoutFold.svelte';
	import VisualButton from '$lib/components/VisualButton.svelte';
	import VisualHeading from '$lib/components/VisualHeading.svelte';
	import VisualParagraph from '$lib/components/VisualParagraph.svelte';
	import VisualSection from '$lib/components/VisualSection.svelte';
	import CompositionBenefit from '$lib/components/CompositionBenefit.svelte';
	import LayoutBenefits from '$lib/components/LayoutBenefits.svelte';
	import LayoutStack from '$lib/components/LayoutStack.svelte';
	import VisualCard from '$lib/components/VisualCard.svelte';
	import CompositionInputGroup from '$lib/components/CompositionInputGroup.svelte';
	import CompositionTextareaGroup from '$lib/components/CompositionTextareaGroup.svelte';
	import LayoutChips from '$lib/components/LayoutChips.svelte';
	import VisualChip from '$lib/components/VisualChip.svelte';
	import VisualForm from '$lib/components/VisualForm.svelte';
	import { isValidEmail } from '$lib/functions';

	/**
	 * VARIABLES
	 */
	let formIsLoading = $state(false);
	let formErrors = $state({ email: '', message: '' });
	let interests = $state([
		{ value: 'website', label: 'Webseite', isPressed: true },
		{ value: 'app', label: 'App', isPressed: false },
		{ value: 'branding', label: 'Branding', isPressed: false },
		{ value: 'logo', label: 'Logo', isPressed: false },
		{ value: 'development', label: 'Development', isPressed: false },
		{ value: 'design', label: 'Design', isPressed: false }
	]);
	let selectedInterests = $derived(
		interests
			.filter((i) => i.isPressed)
			.map((i) => i.value)
			.join(',')
	);

	async function handleFormSubmit(e: SubmitEvent) {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const email = (formData.get('email') as string).trim();
		const message = (formData.get('message') as string).trim();
		const interests = (formData.get('interests') as string).trim();

		if (!email) {
			formErrors.email = 'Bitte gib eine Email-Adresse ein.';
		} else if (!isValidEmail(email)) {
			formErrors.email = 'Bitte gib eine gültige Email-Adresse ein.';
		}

		if (!message) {
			formErrors.message = 'Bitte gib eine Nachricht ein.';
		}

		if (formErrors.email || formErrors.message) return;

		const start = Date.now();
		const minProcessTime = 2000;
		formIsLoading = true;

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
		formIsLoading = false;
	}
</script>

<VisualSection id="hero" scheme="3" hero>
	<LayoutContentLimit>
		<LayoutStack tag="hgroup" factor={2}>
			<VisualHeading tag="h1" align="center"
				>Webseiten, die performen.<br />
				Und Kunden gewinnen.</VisualHeading
			>
			<VisualParagraph align="center"
				>Intuitives Design. Klare Kommunikation. Cutting-Edge Performance.<br />
				Für einen digitalen Auftritt, der nachhaltiges Wachstum sichert.</VisualParagraph
			>
		</LayoutStack>
		<LayoutHeroButtons>
			<VisualButton tag="a" href="#get-in-touch" variant="primary">Jetzt anfragen</VisualButton>
			<VisualButton tag="a" href="#intro" variant="secondary">Mehr erfahren</VisualButton>
		</LayoutHeroButtons>
	</LayoutContentLimit>
</VisualSection>

<VisualSection id="intro" scheme="1">
	<LayoutContentLimit>
		<LayoutFold>
			<VisualHeading tag="h2">Ein digitaler Auftritt, der den Unterschied macht.</VisualHeading>
			<VisualParagraph
				>Erfolg im digitalen Raum beginnt mit einer überzeugenden Präsenz. Mit einem starken
				Auftritt werden Sie online nicht nur gefunden, sondern schaffen die Grundlage für echtes
				Wachstum und nachhaltige Entwicklung.</VisualParagraph
			>
		</LayoutFold>
	</LayoutContentLimit>
</VisualSection>

<VisualSection id="benefits" scheme="2">
	<LayoutContentLimit size="narrow">
		<LayoutStack factor={3}>
			<LayoutStack tag="hgroup">
				<VisualHeading tag="h2">Nicht gut. Großartig.</VisualHeading>
				<VisualParagraph
					>Für eine Webseite, die nicht bloß gesehen, sondern erlebt wird.</VisualParagraph
				>
			</LayoutStack>
			<LayoutBenefits>
				<CompositionBenefit icon="message">
					{#snippet heading()}Klare Kommunikation{/snippet}
					{#snippet body()}Botschaften, die Nutzer und potenzielle Kunden ansprechen. Klar, prägnant
						und effektiv.{/snippet}
				</CompositionBenefit>
				<CompositionBenefit icon="compass">
					{#snippet heading()}Intuitives Design{/snippet}
					{#snippet body()}Userinterfaces, die sich wie von selbst erklären. Für begeisterte Nutzer
						und hohes Engagement.{/snippet}
				</CompositionBenefit>
				<CompositionBenefit icon="tempo">
					{#snippet heading()}Cutting-Edge Performance{/snippet}
					{#snippet body()}Blitzschnelle Ladezeiten. Performance, die den Unterschied macht und
						Conversions steigert.
					{/snippet}
				</CompositionBenefit>
				<CompositionBenefit icon="data">
					{#snippet heading()}Auf Daten gestützt{/snippet}
					{#snippet body()}Entscheidungen, die auf Daten und fundierten Erkenntnissen basieren. Für
						messbare Resultate.{/snippet}
				</CompositionBenefit>
				<CompositionBenefit icon="star">
					{#snippet heading()}Höchste Qualität{/snippet}
					{#snippet body()}Solide entwickelt, zukunftssicher und stabil. Lösungen, die den Test der
						Zeit bestehen.{/snippet}
				</CompositionBenefit>
				<CompositionBenefit icon="team">
					{#snippet heading()}Starke Zusammenarbeit{/snippet}
					{#snippet body()}Partnerschaftlich, transparent und zuverlässig. Für eine nachhaltig
						erfolgreiche Zusammenarbeit.
					{/snippet}
				</CompositionBenefit>
			</LayoutBenefits>
		</LayoutStack>
	</LayoutContentLimit>
</VisualSection>

<!-- <VisualSection id="testimonials" scheme="1">
	<LayoutContentLimit>
		<LayoutHeadingGroup tag="hgroup">
			<VisualHeading tag="h2">Das sagen Kunden.</VisualHeading>
			<VisualParagraph>Echte Stimmen. Echte Erfolge.</VisualParagraph>
		</LayoutHeadingGroup>
	</LayoutContentLimit>
</VisualSection> -->

<VisualSection id="get-in-touch" scheme="1">
	<LayoutContentLimit size="narrow">
		<LayoutFold>
			<LayoutStack>
				<LayoutStack tag="hgroup">
					<VisualHeading tag="h2">Gemeinsam Ideen verwirklichen.</VisualHeading>
					<VisualParagraph
						>Projekte starten mit einer Vision. Der nächste Schritt ist nur einen Klick entfernt.</VisualParagraph
					>
				</LayoutStack>
			</LayoutStack>
			<VisualCard>
				<VisualForm onsubmit={handleFormSubmit}>
					<LayoutStack factor={0.75}>
						<VisualHeading tag="h3" appearance="h5">Ich interessiere mich für...</VisualHeading>
						<LayoutChips>
							{#each interests as interest (interest.value)}
								<VisualChip
									value={interest.value}
									isPressed={interest.isPressed}
									onclick={() => (interest.isPressed = !interest.isPressed)}
									>{interest.label}</VisualChip
								>
							{/each}
						</LayoutChips>
						<input type="hidden" name="interests" value={selectedInterests} />
						<CompositionInputGroup
							label="Email"
							name="email"
							placeholder="Email-Adresse eingeben"
							required
							isDisabled={formIsLoading}
							error={formErrors.email}
						/>
						<CompositionTextareaGroup
							label="Nachricht"
							name="message"
							placeholder="Beschreibe dein Projekt"
							required
							isDisabled={formIsLoading}
							error={formErrors.message}
						/>
						<VisualButton variant="primary" isBusy={formIsLoading}>Abschicken</VisualButton>
					</LayoutStack>
				</VisualForm>
			</VisualCard>
		</LayoutFold>
	</LayoutContentLimit>
</VisualSection>
