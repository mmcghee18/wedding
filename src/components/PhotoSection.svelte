<script>
	import { base } from "$app/paths";

	import _ from "lodash";

	export let title;
	export let pics;
</script>

<h3>{title}</h3>
<div class="photos">
	{#each _.range(pics) as i}
		<img src={`${title}-${i + 1}.jpeg`} style:width={`${100 / pics}%`} />
	{/each}
</div>

<style>
	.photos {
		display: flex;
		width: 100%;
	}
	img {
		padding: 10px;
		background: var(--color-gray-100);
		height: auto;
	}
</style>
