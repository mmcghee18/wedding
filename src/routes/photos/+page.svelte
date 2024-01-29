<script>
	import PageTitle from "$components/PageTitle.svelte";
	import PhotoSection from "$components/PhotoSection.svelte";

	const sections = [
		{
			title: "home",
			pics: 6,
			description:
				"we love our home in beautiful oakland, ca, but have built homes together across the country, including in beautiful saint paul, mn!"
		},
		{
			title: "travel",
			pics: 4,
			description: "open to suggestions for our next destination..."
		},
		{
			title: "food",
			pics: 4,
			description: "we love to cook and eat together!"
		},
		{
			title: "weddings",
			pics: 3,
			description:
				"celebrating the weddings of our family and friends over the last few years."
		},
		{
			title: "proposal",
			pics: 6,
			description:
				"we did a double proposal - michelle proposed to megan in northern wisconsin where we celebrated with family. megan proposed to michelle in berkeley where we celebrated with friends."
		}
	];
</script>

<PageTitle>Photos</PageTitle>

{#each sections as { title, pics, description }}
	<PhotoSection {title} {description} {pics} />
{/each}
