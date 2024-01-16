<script>
	import PageTitle from "$components/PageTitle.svelte";
	import PhotoSection from "$components/PhotoSection.svelte";

	const sections = [
		{ title: "home", pics: 5 },
		{ title: "travel", pics: 3 },
		{ title: "food", pics: 4 },
		{ title: "weddings", pics: 3 },
		{ title: "proposal", pics: 6 }
	];
</script>

<PageTitle>Photos</PageTitle>

{#each sections as { title, pics }}
	<PhotoSection {title} {pics} />
{/each}
