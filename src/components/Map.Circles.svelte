<script>
	import rsvps from "$data/rsvps.csv";
	import { onMount } from "svelte";

	export let projection;

	let mounted = false;
	let rsvpsCleaned = rsvps.map((d) => ({
		...d,
		coming: d.coming === "TRUE",
		responded: d.responded === "TRUE",
		long: +d.Longitude,
		lat: +d.Latitude
	}));

	const circles = rsvpsCleaned
		.filter((d) => d.long && d.lat)
		.map((d) => ({
			coming: d.coming,
			responded: d.responded,
			coords: projection([d.long, d.lat]),
			state: d["State / Region"]
		}))
		.filter((d) => d.coords && d.coords[0] && d.coords[1]);

	onMount(() => {
		mounted = true;
	});
</script>

<g class="circles">
	{#each circles as d}
		<circle
			cx={d.coords[0]}
			cy={d.coords[1]}
			r="4"
			class:pending={!d.responded}
			class:coming={d.responded && d.coming}
			class:ca={d.state === "CA"}
			style={`--delay: ${Math.random() * 3}s`}
		/>
	{/each}
</g>

<style>
	circle {
		opacity: 0;
		transition: opacity 1s var(--delay) ease-in-out;
	}
	circle.coming {
		fill: var(--color-accent);
		opacity: 1;
	}
	.pending {
		fill: var(--color-fg);
		opacity: 0.2;
	}
	.pending.ca {
		opacity: 0;
	}
</style>
