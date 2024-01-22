<script>
	import _ from "lodash";

	export let title;
	export let pics;
	export let description;

	let picWidth;
</script>

<h3>{title}</h3>
<p>{description}</p>
<div class="outer">
	<div
		class="inner"
		bind:clientWidth={picWidth}
		style={`--pic-width: ${picWidth * -1}px`}
	>
		{#each _.range(pics) as i}
			<img src={`${title}-${i + 1}.jpeg`} />
		{/each}
	</div>
</div>

<style>
	.outer {
		display: flex;
		width: 100%;
		overflow: hidden;
	}
	.inner {
		display: flex;
		/* animation: slide 10s infinite linear; */
	}
	img {
		padding: 10px 3px;
		background: var(--color-gray-100);
		height: 300px;
		width: auto;
	}

	@keyframes slide {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(calc(var(--pic-width) + 100vw));
		}
	}
</style>
