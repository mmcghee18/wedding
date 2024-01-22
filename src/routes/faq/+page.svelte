<script>
	import { base } from "$app/paths";
	import Faq from "$components/Faq.svelte";
	import PageTitle from "$components/PageTitle.svelte";

	const faqs = [
		{
			question: "When should I RSVP by?",
			answer: `Please <a href='https://www.zola.com/wedding/michelleandmegan2024/rsvp' target='_blank'>RSVP</a> by April 1st!`
		},
		{
			question: "Is there a dress code?",
			answer:
				'Forest Formal!\n\nBy which we mean, something special and fancy, but also reasonable to wear in the woods.\n\n(If you need an official term, we\'ll go with "semi-formal.")'
		},
		{
			question: "Are kids invited?",
			answer:
				"Do what is best for you! Your kids are completely welcome, and you're also completely welcome to leave them home."
		},
		{
			question: "Can I bring a date?",
			answer:
				"If your invitation includes a +1, then yes. If not, reach out and we'll see what we can do as RSVPs come in."
		},
		{
			question:
				"I want to stay in one of those gorgeous cabins on Saturday! What do I do?",
			answer:
				"Sweet! On your <a href='https://www.zola.com/wedding/michelleandmegan2024/rsvp' target='_blank'>RSVP</a>, indicate that you're interested. We will follow up with you from there."
		},
		{
			question:
				"I'm not staying onsite on Saturday. Explain the whole shuttle thing again?",
			answer:
				"Gladly.\n\nWaterfall Lodge does not allow people to park onsite unless they're staying there overnight.\n\nSo, on Saturday, you'll park in the parking lot of a church that is 5 minutes from Waterfall Lodge. Here's the address: <a href='https://maps.app.goo.gl/ZDKXz6fA4psmTPGC7'>St Peter & St Paul Orthodox</a>.\n\nFrom there, a shuttle will pick you up and bring you to Waterfall Lodge for the ceremony and reception. The shuttles will also bring guests back to their cars at the end of the night.\n\nIf you're staying onsite on Saturday, you can park at Waterfall Lodge."
		}
	];
</script>

<div class="faq-title">
	<PageTitle>Frequently Asked Questions</PageTitle>
	<p>
		If you don't see your question answered here, email us at
		michmac202@gmail.com
	</p>
</div>

{#each faqs as faq}
	<Faq question={faq.question} answer={faq.answer} />
{/each}

<style>
	.faq-title {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		text-align: center;
		font-family: var(--serif);
		display: none;
	}
	p {
		text-align: center;
	}

	@media (max-width: 750px) {
		h2 {
			display: block;
		}
	}
</style>
