<script lang="ts">
	/**
	 * IMPORTS
	 */
	import CompositionBenefit from '$lib/components/CompositionBenefit.svelte';
	import CompositionContactForm from '$lib/components/CompositionContactForm.svelte';
	import LayoutBenefits from '$lib/components/LayoutBenefits.svelte';
	import LayoutContactIcon from '$lib/components/LayoutContactIcon.svelte';
	import LayoutContentLimit from '$lib/components/LayoutContentLimit.svelte';
	import LayoutDefinitionList from '$lib/components/LayoutDefinitionList.svelte';
	import LayoutFold from '$lib/components/LayoutFold.svelte';
	import LayoutHeroButtons from '$lib/components/LayoutHeroButtons.svelte';
	import LayoutMeasure from '$lib/components/LayoutMeasure.svelte';
	import LayoutStack from '$lib/components/LayoutStack.svelte';
	import VisualButton from '$lib/components/VisualButton.svelte';
	import VisualCard from '$lib/components/VisualCard.svelte';
	import VisualDefinitionDetail from '$lib/components/VisualDefinitionDetail.svelte';
	import VisualDefinitionTerm from '$lib/components/VisualDefinitionTerm.svelte';
	import VisualHeading from '$lib/components/VisualHeading.svelte';
	import VisualIcon from '$lib/components/VisualIcon.svelte';
	import VisualLineBreak from '$lib/components/VisualLineBreak.svelte';
	import VisualParagraph from '$lib/components/VisualParagraph.svelte';
	import VisualSection from '$lib/components/VisualSection.svelte';
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
			<LayoutMeasure>
				<LayoutStack>
					<LayoutStack tag="hgroup">
						<VisualHeading tag="h2">Gemeinsam Ideen verwirklichen.</VisualHeading>
						<VisualParagraph
							>Projekte starten mit einer Vision. Der nächste Schritt ist nur einen Klick entfernt.</VisualParagraph
						>
					</LayoutStack>
					<LayoutDefinitionList>
						<VisualDefinitionTerm
							><LayoutContactIcon><VisualIcon name="mail" label="E-Mail" /></LayoutContactIcon
							></VisualDefinitionTerm
						>
						<VisualDefinitionDetail>office@nuclis.io</VisualDefinitionDetail>
						<VisualDefinitionTerm
							><LayoutContactIcon><VisualIcon name="phone" label="Telefon" /></LayoutContactIcon
							></VisualDefinitionTerm
						>
						<VisualDefinitionDetail>+43 699 19900303</VisualDefinitionDetail>
						<VisualDefinitionTerm
							><LayoutContactIcon><VisualIcon name="map-pin" label="Adresse" /></LayoutContactIcon
							></VisualDefinitionTerm
						>
						<VisualDefinitionDetail
							>Gumpendorfer Straße 73/11<VisualLineBreak />1060 Wien</VisualDefinitionDetail
						>
					</LayoutDefinitionList>
				</LayoutStack>
			</LayoutMeasure>
			<VisualCard>
				<CompositionContactForm />
			</VisualCard>
		</LayoutFold>
	</LayoutContentLimit>
</VisualSection>
