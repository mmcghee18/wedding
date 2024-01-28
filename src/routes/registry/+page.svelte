<script>
	import { onMount } from "svelte";
	import PageTitle from "$components/PageTitle.svelte";

	onMount(() => {
		// Check if the script is already added
		if (!document.getElementById("zola-wjs")) {
			const script = document.createElement("script");
			script.id = "zola-wjs";
			script.async = true;
			script.src = "https://widget.zola.com/js/widget.js";
			// Append the script to the specific container
			const embedContainer = document.getElementById("zola-embed-container");
			embedContainer.appendChild(script);
		}
	});
</script>

<PageTitle>Registry</PageTitle>

<p>If you want to give us something, you can check out our registry below.</p>
<p>
	We know travel and accomodations can be expensive, so no pressure to spend a
	lot. Homemade gifts or cards are also welcome and appreciated.
</p>
<p>Your presence is the most important gift to us!</p>

<div id="zola-embed-container">
	<a
		class="zola-registry-embed"
		href="https://www.zola.com/registry/michelleandmegan2024/edit"
		data-registry-key="michelleandmegan2024">Our Zola Wedding Registry</a
	>
</div>

<style>
	a {
		display: none;
	}
	p {
		text-align: center;
	}
</style>
