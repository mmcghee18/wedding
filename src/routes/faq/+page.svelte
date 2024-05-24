<script>
	import { base } from "$app/paths";
	import Faq from "$components/Faq.svelte";
	import PageTitle from "$components/PageTitle.svelte";

	const faqs = [
		{
			question:
				"Where do I park for the ceremony and reception at Waterfall Lodge?",
			answer: `If you're staying at Waterfall Lodge, you'll be able to park next to your cabin. If not, you'll take a short shuttle ride in. See the <a href='${base}/travel'>travel page</a> for more details.`
		},
		{
			question: "Is there a dress code for Saturday?",
			answer:
				"<a href=https://www.theknot.com/content/what-to-wear-semi-formal#what-is-semi-formal-wedding target=_blank>Semi-formal</a> or (a term we made up) Forest Formal!\n\nBy which we mean, something special and fancy, but also reasonable to wear in the woods. We'd recommend wearing shoes that are comfortable to walk in."
		},
		{
			question: "What's the weather going to be like?",
			answer: "Low 70s during the day and mid-50s at night. Bring a layer!"
		},
		{
			question: "Are the ceremony and reception indoors or outdoors?",
			answer:
				"The ceremony, cocktail hour, and dinner will be held outdoors in the redwoods. The dance floor is indoors. We'll have heaters and blankets available if it's chilly."
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
