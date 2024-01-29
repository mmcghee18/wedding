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
			question: "Is there a dress code for Saturday?",
			answer:
				"Semi-formal or (a term we made up) Forest Formal!\n\nBy which we mean, something special and fancy, but also reasonable to wear in the woods (maybe not your highest heel)."
		},
		{
			question: "Are kids invited?",
			answer:
				"Do what is best for you! Your kids are welcome if you'd like to bring them."
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
				"I'm not staying onsite on Saturday. What's the deal with parking?",
			answer: `See the <a href='${base}/travel'>travel page</a> ('Important note about driving to Waterfall Lodge') for details.`
		}
	];
	``;
</script>

<div class="faq-title">
	<PageTitle>Frequently Asked Questions</PageTitle>
	<p>
		If you don't see your question answered here, email us at
		<strong>michellemegan.2024@gmail.com</strong>.
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
