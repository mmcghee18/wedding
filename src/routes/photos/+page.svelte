<script>
	import PageTitle from "$components/PageTitle.svelte";
	import PhotoSection from "$components/PhotoSection.svelte";

	const sections = [
		{
			title: "home",
			pics: 4,
			description:
				"we love our home in beautiful oakland, california, but have shared homes together across the country, including in beautiful st. paul, minnesota!"
		},
		{ title: "travel", pics: 4, description: "we love to travel..." },
		{ title: "food", pics: 4, description: "...and eat good food" },
		{
			title: "weddings",
			pics: 3,
			description:
				"celebrating the weddings of our family and friends over the last few years!"
		},
		{
			title: "proposal",
			pics: 6,
			description:
				"we did a double proposal - michelle proposed to megan in northern wisconsin where we celebrated with family. megan proposed to michelle in berkeley where we celebrated with friends. we love surprises!"
		}
	];
</script>

<PageTitle>Photos</PageTitle>

{#each sections as { title, pics, description }}
	<PhotoSection {title} {description} {pics} />
{/each}
