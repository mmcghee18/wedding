<script>
	import { onMount } from "svelte";
	import _ from "lodash";

	export let title;
	export let pics;
	export let description;
</script>

<h3>{title}</h3>
<p>{description}</p>
<div class="outer">
	{#each _.range(pics) as i}
		<img src={`${title}-${i + 1}.jpeg`} alt={`Image ${i + 1}`} />
	{/each}
</div>

<style>
	.outer {
		display: flex;
		width: 100%;
		overflow: scroll;
		background: var(--color-gray-100);
		padding: 10px;
	}
	.inner {
		display: flex;
		overflow: scroll;
	}
	.img-wrapper {
		display: flex;
	}
	img {
		height: 300px;
		width: auto;
		margin-right: 10px;
	}
	img:last-of-type {
		margin-right: 0;
	}
</style>
