<script>
	import { onMount } from "svelte";

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

<p>Your presence is the best gift!</p>
<p>
	But if you do feel inclined to get us something, check out our registry below.
</p>

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
