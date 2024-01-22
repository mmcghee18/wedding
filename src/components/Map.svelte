<script>
	import Circles from "$components/Map.Circles.svelte";
	import { feature } from "topojson-client";
	import { geoAlbersUsa, geoPath } from "d3-geo";
	import usStatesTopo from "$data/us-states.json";

	const geojson = feature(usStatesTopo, usStatesTopo.objects.states_20m_2017);
	const projection = geoAlbersUsa();
	const pathGenerator = geoPath().projection(projection);
	const states = geojson.features.filter(
		(d) => d.properties.STUSPS !== "AK" && d.properties.STUSPS !== "HI"
	);
</script>

<div class="chart-container">
	<svg viewBox="0 0 900 500">
		<g class="borders">
			{#each states as state}
				<path d={pathGenerator(state)} class="state" />
			{/each}
		</g>

		<Circles {projection} />
	</svg>
</div>

<style>
	.state {
		fill: var(--color-gray-50);
		stroke: var(--color-fg);
		stroke-opacity: 0.5;
	}

	.chart-container {
		max-width: 700px;
		width: 100%;
		margin: auto;
	}
</style>
